import { getDatabase, ref, get } from 'firebase/database';
import { useEffect } from 'react';
import 'firebase/auth';

export function getData(dataPath) {
  // Use the database reference to get the data
  const database = getDatabase();
  const dataRef = ref(database, dataPath);

  // Return a promise that resolves with the retrieved data
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

export function getAllKeys(dataPath) {
    // Use the database reference to get the data
    const database = getDatabase();
    const dataRef = ref(database, dataPath);
  
    // Return a promise that resolves with an array of keys
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

export function IntervalToUpdateData(fetchData, interval = 500) {
    useEffect(() => {
      fetchData(); // Initial data fetch
  
      const intervalId = setInterval(() => {
        fetchData();
      }, interval);
  
      return () => {
        clearInterval(intervalId);
      };
    }, [fetchData, interval]);
  }