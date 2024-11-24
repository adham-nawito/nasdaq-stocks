import React from 'react';
import { render } from '@testing-library/react';
import StockList from '../components/stocks/StockList';
import { StockType } from '@/components/stocks/query/useStocks';

import '@testing-library/jest-dom';


describe('StockList Component', () =>
{
  const mockStocks: StockType[] = [
    {
      "ticker": "A",
      "name": "Agilent Technologies Inc.",
      "market": "stocks",
      "locale": "us",
      "primary_exchange": "XNYS",
      "type": "CS",
      "active": true,
      "currency_name": "usd",
      "cik": "0001090872",
      "composite_figi": "BBG000C2V3D6",
      "share_class_figi": "BBG001SCTQY4",
      "last_updated_utc": "2024-08-21T00:00:00Z"
    },
    {
      "ticker": "AA",
      "name": "Alcoa Corporation",
      "market": "stocks",
      "locale": "us",
      "primary_exchange": "XNYS",
      "type": "CS",
      "active": true,
      "currency_name": "usd",
      "cik": "0001675149",
      "composite_figi": "BBG00B3T3HD3",
      "share_class_figi": "BBG00B3T3HF1",
      "last_updated_utc": "2024-11-22T00:00:00Z"
    },
    {
      "ticker": "AAA",
      "name": "Alternative Access First Priority CLO Bond ETF",
      "market": "stocks",
      "locale": "us",
      "primary_exchange": "ARCX",
      "type": "ETF",
      "active": true,
      "currency_name": "usd",
      "cik": "0001375140",
      "composite_figi": "BBG01B0JRCS6",
      "share_class_figi": "BBG01B0JRCT5",
      "last_updated_utc": "2024-11-22T00:00:00Z"
    },
  ];

  it('renders the correct number of Stock components', () =>
  {
    render(<StockList stocks={mockStocks} />);

    mockStocks.forEach((stock) =>
    {
      const stockDetails = document.querySelector(`#${stock.ticker}-details`);
      expect(stockDetails).toBeInTheDocument();
    });
  });
});
