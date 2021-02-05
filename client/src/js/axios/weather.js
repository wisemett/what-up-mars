const axios = require('axios');

// Insight 데이터 가져오기
const getInsight = async () => {
  const { data } = await axios.get(
    'https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0'
  );

  return data;
};

// Insight 데이터 가공하여 객체 반환하기
const makeInsightObject = async () => {
  const data = await getInsight();

  const currentSolDate = data.sol_keys[data.sol_keys.length - 1]; // 778
  const currentData = data[currentSolDate];
  const solDate = `Sol ${currentSolDate}`;
  const earthDate = new Date(currentData.Last_UTC).toDateString().slice(0, 10); // Thu Feb 04
  const highPressure = currentData.PRE
    ? `High: ${currentData.PRE.mx} Pa`
    : 'No Data From NASA';
  const lowPressure = currentData.PRE
    ? `Low: ${currentData.PRE.mn} Pa`
    : 'No Data From NASA';
  const highTemperature = currentData.AT
    ? `High: ${currentData.AT.mx} °F
    `
    : 'No Data From NASA';
  const lowTemperature = currentData.AT
    ? `Low: ${currentData.AT.mn} °F
    `
    : 'No Data From NASA';
  const highWindSpeed = currentData.HWS
    ? `High: ${currentData.HWS.mx} mph`
    : 'No Data From NASA';
  const lowWindSpeed = currentData.HWS
    ? `Low: ${currentData.HWS.mn} mph`
    : 'No Data From NASA';

  return {
    solDate,
    earthDate,
    highPressure,
    lowPressure,
    highTemperature,
    lowTemperature,
    highWindSpeed,
    lowWindSpeed,
  };
};

export default makeInsightObject;
