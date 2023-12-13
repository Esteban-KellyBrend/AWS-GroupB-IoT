import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../auth/firebase';

const useAllDataFromFirebase = (path) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataRef = ref(database, path);

    const handleDataChange = (snapshot) => {
      if (snapshot.exists()) {
        setData(Object.entries(snapshot.val()).map(([key, value]) => ({ key, value })).reverse());
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

export {useAllDataFromFirebase };