import axios from 'axios';

const API_BASE_URL = `${process.env.REACT_APP_APIURL}/kcisa`;
const SERVICE_KEY = '356b0d91-82e9-43e0-b690-b78a982ec774';

// 공공 API 데이터 요청
export const publicData = async ({ numOfRows = 100, pageNo = 1 } = {}) => {
  const response = await axios.get(API_BASE_URL, {
    params: { numOfRows, pageNo },
  });
  return response.data;
};
