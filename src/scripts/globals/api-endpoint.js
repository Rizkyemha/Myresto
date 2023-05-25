import CONFIG from './config';

const API_ENDPOINT = {
  Daftar: `${CONFIG.BASE_URL}list`,
  Detail: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
