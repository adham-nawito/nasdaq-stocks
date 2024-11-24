//@ts-nocheck
import React from 'react';

import { StockType } from '@/components/stocks/query/useStocks';

import { Card, CardContent } from '../ui/card';
import { formatDate } from '../../lib/formatDate';


export function Stock({ stock }: Readonly<{ stock: StockType; }>)
{
  const formattedDate = formatDate({ dateString: stock.last_updated_utc });

  return (
    <Card id={`${stock.ticker}-details`} className="shadow-md border rounded-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
      <CardContent>

        <StockCardDetails title='Name' value={stock.name} />
        <StockCardDetails title='Ticker' value={stock.ticker} />
        <StockCardDetails title='Currency' value={stock.currency_name} />

        <p className="text-xs text-muted-foreground">
          <span className="font-bold">Last updated:</span> {formattedDate}
        </p>
      </CardContent>
    </Card>
  );
}

function StockCardDetails({ title, value }: Readonly<{ title: string, value: string; }>)
{
  return (
    <div className="flex justify-between m-3">
      <span className="text-xl font-bold">{title}</span>
      <span className="text-muted-foreground text-sm">{value}</span>
    </div>
  );
}
