import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';

export const useAllDataFromFirebase = (path) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const database = getDatabase();
    const dataRef = ref(database, path);

    const handleDataChange = (snapshot) => {
      if (snapshot.exists()) {
        const dataArray = Object.entries(snapshot.val()).map(([key, value]) => ({ key, value }));
        setData(dataArray);
      } else {
        console.log("No data available");
        setData([]);
      }
    };

    const unsubscribe = onValue(dataRef, handleDataChange);

    return () => {
      unsubscribe();
    };
  }, [path]);

  return data;
};

export const useLimitedDataFromFirebase = (path, count = 10) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const database = getDatabase();
    const dataRef = ref(database, path);

    const handleDataChange = (snapshot) => {
      if (snapshot.exists()) {
        const dataArray = Object.entries(snapshot.val()).map(([key, value]) => ({ key, value }));
        dataArray.sort((a, b) => new Date(a.key) - new Date(b.key));
        const limitedData = dataArray.slice(-count);
        setData(limitedData.reverse());
      } else {
        console.log("No data available");
        setData([]);
      }
    };

    const unsubscribe = onValue(dataRef, handleDataChange);

    return () => {
      unsubscribe();
    };
  }, [path, count]);

  const reverseddata = data.reverse();
  return reverseddata;
};
