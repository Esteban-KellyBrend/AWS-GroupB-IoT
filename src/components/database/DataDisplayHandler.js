export const formatDataKeys = (dataKeys) => {
  return dataKeys.map(entry => {
    const parts = entry.split('-');
    if (parts.length === 2) {
      return parts[1];
    } else {
      return entry;
    }
  });
};

export const GetLowHighAveData = (values) => {
    const lowestValue = Math.min(...values);
    const highestValue = Math.max(...values);
    const averageValue = values.reduce((acc, val) => acc + val, 0) / values.length;

    return [averageValue, lowestValue, highestValue]
}
