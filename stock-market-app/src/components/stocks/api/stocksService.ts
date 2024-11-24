import { StockType } from '@/components/stocks/query/useStocks';
import axios from 'axios';

const BASE_URL = 'https://api.polygon.io/v3/reference/tickers';
const API_KEY = 'LwNupcc2PiBNHVSfzRcS6i2VatcYtC__'; //This should move to .env

type FetchStocksSearchParams = {
  query: string;
  limit: number;
}

export const fetchStocks = async ({query,limit}:FetchStocksSearchParams) : Promise<StockType[]> =>
{
  try
  {
    const response = await axios.get(BASE_URL, {
      params: {
        search: query,
        limit,
        apiKey: API_KEY,
      },
    });
    return response.data.results;
  } catch (error:any)
  {
    if (error.response && error.response.status === 429)
    {
      const retryAfter = error.response.headers['retry-after'];
      if (retryAfter)
      {
        const delay = parseInt(retryAfter, 10) * 1000;
        await new Promise(resolve => setTimeout(resolve, delay));
        return fetchStocks({query, limit});
      }
    }

    throw error;

  }
};
