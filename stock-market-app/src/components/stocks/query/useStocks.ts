import
  {
    useInfiniteQuery,
    infiniteQueryOptions,
    UseInfiniteQueryOptions,
    UndefinedInitialDataInfiniteOptions,
    keepPreviousData,
} from '@tanstack/react-query';

import { fetchStocks } from '../api/stocksService';

export type StockType = {
  ticker: string;
  name: string;
  active: boolean,
  cik: string,
  composite_figi: string,
  currency_name: string,
  last_updated_utc: string,
  locale: string,
  market: string,
  primary_exchange: string,
  share_class_figi: string,
  type: string,

};

type UseQueryOptionsStocksList = UndefinedInitialDataInfiniteOptions<

  Array<StockType>,
  Error,
  Array<StockType>,
  UseInfiniteQueryOptions['queryKey'],
  number
>;

export function createQueryKeyStocksList(query: string)
{
  return ['stocks', query] as UseInfiniteQueryOptions['queryKey'];
}

export function createQueryOptionsStocksList(query: string, options?: UseQueryOptionsStocksList)
{
  return infiniteQueryOptions({
    queryFn: ({ pageParam = 0 }) =>
    {
      const limit = (pageParam + 1) * 10;
      return fetchStocks({query, limit});
    },
    queryKey: createQueryKeyStocksList(query),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, _lastPageParam) =>
    {
      if (lastPage.length < 10)
      {
        return undefined;
      }

      return allPages.length;
    },
    refetchOnWindowFocus: false,
    staleTime: 60_000 * 5,
    placeholderData: keepPreviousData,
    ...(options ?? {}),
  });
}


export function useInfiniteQueryStocksList(query: string, options?: UseQueryOptionsStocksList)
{
  return useInfiniteQuery(createQueryOptionsStocksList(query, options));
}
