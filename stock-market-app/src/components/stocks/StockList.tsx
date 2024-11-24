import React from 'react';

import { StockType } from '@/components/stocks/query/useStocks';

import { Stock } from './Stock';

interface StockListProps
{
  stocks: StockType[];
}

const StockList: React.FC<StockListProps> = ({ stocks }: StockListProps) =>
{
  return (
    stocks.map((stock: StockType) => (
      <Stock key={stock.ticker} stock={stock} />
    ))
  );
};

export default StockList;
