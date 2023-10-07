import axios from 'axios';

export async function fitnessCalculatorApi(url, options) {
  const response = await axios(
    `https://fitness-calculator.p.rapidapi.com${url}`,
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3cc3c5dcb3mshc1d7c622d91e2cap1e9e12jsn2aed19733009',
        'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com',
      },
      ...options,
    },
  );
  return response.data;
}
