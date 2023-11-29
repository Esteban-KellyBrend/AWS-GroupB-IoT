import { getDatabase, ref, get } from 'firebase/database';
import { useEffect } from 'react';
import 'firebase/auth';

function getData(dataPath) {
  const database = getDatabase();
  const dataRef = ref(database, dataPath);

  return new Promise((resolve, reject) => {
    get(dataRef).then((snapshot) => {
      if (snapshot.exists()) {
        resolve(snapshot.val());
      } else {
        reject(new Error('No data found'));
      }
    }).catch((error) => {
      reject(error);
    });
  });
}

export function getAllData(dataPath) {
    const database = getDatabase();
    const dataRef = ref(database, dataPath);
  
    return new Promise((resolve, reject) => {
      get(dataRef).then((snapshot) => {
        if (snapshot.exists()) {
          const keysArray = Object.keys(snapshot.val());
          resolve(keysArray);
        } else {
          reject(new Error('No data found'));
        }
      }).catch((error) => {
        reject(error);
      });
    });
}

async function getRecentData(dataPath) {
    const keys = await getAllData(dataPath);
    const recentdata = keys.length > 0 ? keys[keys.length - 1] : null;
    const result = await getData(`averageWindSpeed/${recentdata}`);
    return result;
}

export function SetRealtimeDataAsync(dataPath, setDataCallback, UpdateInterval = 1000) {
    const fetchData = async () => {
        try {
          const mostRecentKey = await getRecentData(dataPath);
          setDataCallback(mostRecentKey);
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      };
    
      useEffect(() => {
        fetchData();
    
        const intervalId = setInterval(() => {
          fetchData();
        }, UpdateInterval);
    
        return () => {
          clearInterval(intervalId);
        };
      }, [dataPath, UpdateInterval, fetchData]);
}
