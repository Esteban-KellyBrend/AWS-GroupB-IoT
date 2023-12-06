import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useAllDataFromFirebase } from "../../components/database/FirebaseHandler";

/*
  Formats the label using "key" type in firebase from "YYYYMMDD_HHMMSS" to 
  a desire format such as DDMMYYYY or HHMM and has the ability to convert
  to 12 hour clock or remain 24 hour
*/
export const formatDataKeys = (dataKeys, dateFormat, timeFormat = '24hour') => {
  return dataKeys.map(entry => {
    const parts = entry.split('_');
    if (parts.length === 2) {
      const datePart = parts[0];
      const year = datePart.slice(0, 4);
      const month = datePart.slice(4, 6);
      const day = datePart.slice(6, 8);

      switch (dateFormat) {
        case 'DDMMYYYY':
          return `${month}${day}${year}`;
        case 'HHMM':
          const timePart = parts[1];
          let hours = parseInt(timePart.slice(0, 2), 10);
          const minutes = timePart.slice(2, 4);

          if (timeFormat === '12hour') {
            const period = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12 || 12;
            return `${hours}:${minutes} ${period}`;
          } else {
            return `${hours}:${minutes}`;
          }
        default:
          return entry;
      }
    } else {
      return entry;
    }
  });
};

/*
  Using the data type in firebase, computes the lowest, highest and average data
  of the entire given array.
*/
export const GetLowHighAveData = (values) => {
  const lowestValue = Math.min(...values);
  const highestValue = Math.max(...values);
  const averageValue = values.reduce((acc, val) => acc + val, 0) / values.length;
  const roundedAverage = Number(averageValue.toFixed(2));

  return [roundedAverage, lowestValue, highestValue];
};

/*
  Gets the current data using today's date.
  
  NOTE: I've decided to not use "useAllDataFromFirebase" as it is unecessary to
  load every data for the current day data to ensure performance is optimal.
*/
export const useTodayDataFromFirebase = (path) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const database = getDatabase();
    const dataRef = ref(database, path);

    const handleDataChange = (snapshot) => {
      if (snapshot.exists()) {
        const today = new Date();
        const todayFormatted = `${today.getFullYear()}${(today.getMonth() + 1).toString().padStart(2, '0')}${today.getDate().toString().padStart(2, '0')}`;

        const dataArray = Object.entries(snapshot.val())
          .filter(([key]) => key.startsWith(todayFormatted))
          .map(([key, value]) => ({ key, value }));

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

/*
  Using the function "useAllDataFromFirebase" in FirebaseHander.js, collects the entire
  week data.

  TODO: The only problem is that it starts on Monday rather than Sunday, still trying to find
  a workaround.
*/
export const useWeeklyDataFromFirebase = (path) => {
  const dailyData = useAllDataFromFirebase(path);
  const [weeklyData, setWeeklyData] = useState([]);

  useEffect(() => {
    const groupDataByWeek = () => {
      // Ensure all relevant data is fetched for the entire week
      const last7DaysData = dailyData.slice(-7);

      const groupedData = last7DaysData.reduce((result, entry) => {
        const dateKey = entry.key.split('_')[0];
        const weekStart = getWeekStart(dateKey); // Function to get the start of the week (Sunday)

        if (!result[weekStart]) {
          result[weekStart] = [];
        }

        result[weekStart].push(entry.value);

        return result;
      }, {});

      const formattedWeeklyData = Object.entries(groupedData).map(([weekStart, values]) => ({
        key: weekStart,
        value: calculateAverage(values), // Calculate the average value for the week
      }));

      setWeeklyData(formattedWeeklyData);
    };

    groupDataByWeek();
  }, [dailyData]);

  const calculateAverage = (values) => {
    const sum = values.reduce((acc, value) => acc + value, 0);
    return sum / values.length;
  };

  /*
    Internal function that formats the entire the date format within firebase
    to serve as method to collect the entire data of a single day.
  */
  const getWeekStart = (dateKey) => {
    // Convert dateKey (DDMMYYYY) to a JavaScript Date object
    const day = parseInt(dateKey.slice(6, 8), 10);
    const month = parseInt(dateKey.slice(4, 6), 10) - 1; // Months are zero-indexed
    const year = parseInt(dateKey.slice(0, 4), 10);
    const date = new Date(year, month, day);

    // Get the week start in 'YYYYMMDD' format
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[date.getDay()];

    return dayOfWeek;
  };

  return weeklyData;
};

