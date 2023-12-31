import { useEffect, useState } from 'react';
import { useAllDataFromFirebase } from "../../components/database/FirebaseHandler";

/*
  Formats the label using "key" type in firebase from "YYYYMMDD_HHMMSS" to 
  a desire format such as DDMMYYYY or HHMM and has the ability to convert
  to 12 hour clock or remain 24 hour
*/
export const formatDataKeys = (dataKeys, displayDate = false, timeFormat = '24hour') => {
  return dataKeys.map(entry => {
    const datePart = entry.slice(0, 8);
    //const year = datePart.slice(0, 4);
    const month = datePart.slice(4, 6);
    const day = datePart.slice(6, 8);
    const formattedDate = `${month}/${day}`;

    const timePart = entry.slice(9);
    let hours = parseInt(timePart.slice(0, 2), 10);
    const minutes = timePart.slice(2, 4);

    if (timeFormat === '12hour') {
      const period = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      const formattedTime = `${hours}:${minutes} ${period}`;
      return displayDate ? `${formattedDate} - ${formattedTime}` : formattedTime;
    } else {
      const formattedTime = `${hours}:${minutes}`;
      return displayDate ? `${formattedDate} - ${formattedTime}` : formattedTime;
    }
  });
};

// Using the data type in firebase, computes the lowest, highest and average data of the entire given array.
export const GetLowHighAveData = (values) => {
  const numericValues = values.map(value => Number(value)).filter(value => value !== 0);
  const count = numericValues.length;
  const sum = numericValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const roundedAverage = count === 0 ? 0 : Number((sum / count).toFixed(2));

  const lowestValue = count === 0 ? 0 : Number(Math.min(...numericValues).toFixed(2));
  const highestValue = count === 0 ? 0 : Number(Math.max(...numericValues).toFixed(2));

  return [roundedAverage, lowestValue, highestValue];
};

//  Using the function "useAllDataFromFirebase" in FirebaseHander.js, collects the entire week data.
export const useWeeklyDataFromFirebase = (path) => {
  const dailyData = useAllDataFromFirebase(path);
  const [weeklyData, setWeeklyData] = useState([]);

  useEffect(() => {
    const groupDataByWeek = () => {
      // Ensure all relevant data is fetched for the entire week
      if (dailyData.length === 0) {
        // No data available
        setWeeklyData([]);
        return;
      }
    
      const groupedData = dailyData.reduce((result, entry) => {
        const dateKey = entry.key.split('_')[0];
        const weekStart = getWeekStart(dateKey);
    
        if (!result[weekStart]) {
          result[weekStart] = [];
        }
    
        result[weekStart].push(entry.value);
    
        return result;
      }, {});
    
      const formattedWeeklyData = Object.entries(groupedData).map(([weekStart, values]) => ({
        key: weekStart,
        value: calculateAverage(values),
      }));
    
      setWeeklyData(formattedWeeklyData);
    };

    groupDataByWeek();
  }, [dailyData]);

  const calculateAverage = (values) => {
    const numericValues = values.map(value => Number(value)).filter(value => value !== 0);
    console.log('numericValues:', numericValues);
  
    if (numericValues.length === 0) {
      return NaN; 
    }
  
    const sum = numericValues.reduce((acc, value) => acc + value, 0);
    return Number((sum / numericValues.length).toFixed(2));
  };  

  const getWeekStart = (dateKey) => {
    const day = parseInt(dateKey.slice(6, 8), 10);
    const month = parseInt(dateKey.slice(4, 6), 10) - 1;
    const year = parseInt(dateKey.slice(0, 4), 10);
    const date = new Date(year, month, day);

    const monthsAbbreviated = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthAbbrev = monthsAbbreviated[date.getMonth()];
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    const dayOfMonth = date.getDate();

    return `${monthAbbrev} ${dayOfMonth} - ${dayOfWeek}`;
  };

  return weeklyData;
};

//  Same as "useWeeklyDataFromFirebase" but difference is used for weekly averaging.
// I am aware this is a horrible implementation, but I don't have the time do a cleaner one
export const useWeekDataFromFirebase = (path) => {
  const allData = useAllDataFromFirebase(path);
  const [weekData, setWeekData] = useState([]);

  useEffect(() => {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay()); // Start of the week (Sunday)

    const weekDataArray = allData.filter((item) => {
      const itemDate = new Date(item.key.substring(0, 8)); // Assuming the date is in the first 8 characters of the key
      return itemDate >= startOfWeek && itemDate <= today;
    });

    setWeekData(weekDataArray);
  }, [allData]);

  return weekData;
};

//  get the most recent data based on date format.
export const useMostRecentDataFromFirebase = (path) => {
  const allData = useAllDataFromFirebase(path);
  const [mostRecentData, setMostRecentData] = useState(null);

  useEffect(() => {
    if (allData.length > 0) {
      // Find the most recent data by comparing date keys
      let mostRecent = null;
      allData.forEach((item) => {
        if (!mostRecent || item.key > mostRecent.key) {
          mostRecent = item;
        }
      });

      setMostRecentData(mostRecent ? mostRecent.value : null);
    } else {
      setMostRecentData(null);
    }
  }, [allData]);

  return mostRecentData;
};

export const getCardinalDirection = (angle) => {
  const adjustedAngle = (angle + 360) % 360;

  if (adjustedAngle >= 337.5 || adjustedAngle < 22.5) {
    return "East";
  } else if (adjustedAngle >= 22.5 && adjustedAngle < 67.5) {
    return "North of East";
  } else if (adjustedAngle >= 67.5 && adjustedAngle < 112.5) {
    return "North";
  } else if (adjustedAngle >= 112.5 && adjustedAngle < 157.5) {
    return "North of West";
  } else if (adjustedAngle >= 157.5 && adjustedAngle < 202.5) {
    return "West";
  } else if (adjustedAngle >= 202.5 && adjustedAngle < 247.5) {
    return "South of West";
  } else if (adjustedAngle >= 247.5 && adjustedAngle < 292.5) {
    return "South";
  } else if (adjustedAngle >= 292.5 && adjustedAngle < 337.5) {
    return "South of East";
  } else {
    return "Unknown Direction";
  }
};