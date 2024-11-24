import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Stock } from '../components/stocks/Stock';
import { StockType } from '@/components/stocks/query/useStocks';

import '@testing-library/jest-dom';

const stock: StockType = {
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
};

describe('Stock Component', () =>
{

  it('renders stock details correctly', () =>
  {
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    }).format(new Date(stock.last_updated_utc));

    render(<Stock stock={stock} />);

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText(/Agilent Technologies Inc./i)).toBeInTheDocument();

    expect(screen.getByText('Ticker')).toBeInTheDocument();
    expect(screen.getByText('A')).toBeInTheDocument();

    expect(screen.getByText('Currency')).toBeInTheDocument();
    expect(screen.getByText('usd')).toBeInTheDocument();

    expect(screen.getByText(/Last updated/i)).toBeInTheDocument();
    expect(screen.getByText(formattedDate)).toBeInTheDocument();
  });

  it('applies hover styles on hover', () =>
  {
    render(<Stock stock={stock} />);

    const stockCard = document.querySelector(`#${stock.ticker}-details`);

    if (stockCard)
    {
      fireEvent.mouseEnter(stockCard);

      expect(stockCard).toHaveClass('hover:scale-105');
      expect(stockCard).toHaveClass('hover:shadow-lg');

      fireEvent.mouseLeave(stockCard);

    } else
    {
      throw new Error('Stock card not found');
    }

  });
});
