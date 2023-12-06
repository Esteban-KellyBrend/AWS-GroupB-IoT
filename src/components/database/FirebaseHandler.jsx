import { getDatabase, ref, get } from 'firebase/database';
import { useEffect, useState } from 'react';
import 'firebase/auth';

/*
  I don't why, I don't want to know why, I shouldn't have to wonder why.
  But for some reason the common way to access database doesn't work unless
  we use ref(database, datapath) with getDatabase.
*/
export function getKeyValueArray(dataPath) {
  const database = getDatabase();
  const dataRef = ref(database, dataPath);

  return new Promise((resolve, reject) => {
    get(dataRef).then((snapshot) => {
      if (snapshot.exists()) {
        const dataObject = snapshot.val();
        const dataArray = Object.keys(dataObject).map((key) => ({
          key: key,
          data: dataObject[key],
        }));
        resolve(dataArray);
      } else {
        reject(new Error('No data found'));
      }
    }).catch((error) => {
      reject(error);
    });
  });
}

/*
  This is the easiest way I can do to get the most recent data for real time monitoring.
  TODO: Ask why the firebase must be push for real time and not set?
*/
export async function setRealtimeDataVariable(dataPath, intervalDuration) {
  try {
    const fetchRecentData = async () => {
      const keys = await getKeyValueArray(dataPath);
      const recentKey = keys.length > 0 ? keys[keys.length - 1].key : null;

      if (recentKey) {
        const result = await getKeyValueArray(`${dataPath}/${recentKey}`);
      } else {
        console.log(`No data found in "${dataPath}"`);
      }
    };

    await fetchRecentData();
    const intervalId = setInterval(async () => {
      await fetchRecentData();
    }, intervalDuration);

    return intervalId;
  } catch (error) {
    console.error('Error fetching recent data:', error);
    throw error;
  }
}

/*
  NOTE: This function will significantly increase the loading time as more datas
  is added on the database, with added insult to injury that this refreshes every
  minute or depending on timer intervals.  TOO BAD!

  Not particularly efficient!

  TODO: Whether I have the timer built in or set the timer on the UI.
*/
export function GetRealTimeDatas(dataPath) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getKeyValueArray(dataPath);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dataPath]);

  return data;
}

/*
  The only thing I am satisfied with.
*/
export function GetDataStatistics(dataPath, method) {
  const [statValue, setStatValue] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getKeyValueArray(dataPath);

        if (result.length === 0) {
          throw new Error('No data found');
        }

        const values = result.map(entry => entry.data);

        switch (method) {
          case 'average':
            setStatValue(values.reduce((sum, value) => sum + value, 0) / values.length);
            break;
          case 'lowest':
            setStatValue(Math.min(...values));
            break;
          case 'highest':
            setStatValue(Math.max(...values));
            break;
          default:
            throw new Error('Invalid method. Supported methods: average, lowest, highest');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dataPath, method]);

  return statValue;
}
