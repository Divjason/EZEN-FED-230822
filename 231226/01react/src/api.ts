// 이곳에 외부 API 데이터를 받아오는 역할 부여!!

const BASE_URL = `https://my-json-server.typicode.com/Divjason`;

export const fetchCoins = () => {
  return fetch(`${BASE_URL}/coinlist/coins`).then((response) =>
    response.json()
  );
};

export const fetchCoinInfo = (coinId: string | undefined) => {
  return fetch(`${BASE_URL}/coinlist/coins/${coinId}`).then((response) =>
    response.json()
  );
};

export const fetchCoinTickers = (coinId: string | undefined) => {
  return fetch(`${BASE_URL}/coinprice/coinprice/${coinId}`).then((response) =>
    response.json()
  );
};

export const fetchCoinHistory = (coinId: string | undefined) => {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7;
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}&start=${startDate}&end=${endDate}`
  ).then((response) => response.json());
};
