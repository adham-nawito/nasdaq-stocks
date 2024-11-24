import React, { useState } from 'react';

import { useInfiniteQueryStocksList } from './query/useStocks';

import SearchBar from './SearchBar';
import StockList from './StockList';
import { ErrorAlert } from '../ui/ErrorAlert';
import { Loading } from '../Loading';


const ExploreScreen: React.FC = () =>
{
  const [searchQuery, setSearchQuery] = useState('');
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError, error } =
    useInfiniteQueryStocksList(searchQuery);

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) =>
  {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    console.log({ scrollTop, scrollHeight, clientHeight });
    if (scrollHeight - scrollTop <= clientHeight + 100 && hasNextPage && !isFetchingNextPage)
    {
      fetchNextPage();
    }
  };

  //@ts-ignore
  const stocks = data?.pages?.flat() || [];
  const hasStocks = stocks.length > 0;

  return (
    <div className="m-10 border border-gray-200 h-screen flex flex-col">
      {/* Search Bar */}
      <div className="flex items-center justify-center h-16 px-4">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>

      {/* Divider */}
      <div className="border-b w-full" />

      {/* Scrollable Content */}
      <div
        className="flex-1 p-8 pt-6 overflow-y-auto"
        onScroll={handleScroll}
      >
        {/* Loading State */}
        {isLoading && <p className="text-center text-gray-500"><Loading /></p>}
        {/* Error State */}
        {isError && <p className="text-center text-red-500"><ErrorAlert error={error} /></p>}
        {/* Empty States */}
        {!hasStocks && !isLoading && !isError && (
          <p className="text-center text-gray-500">No stocks available to preview!</p>
        )}

        {/* Stock List */}
        {!isLoading && hasStocks && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <StockList stocks={stocks} />
          </div>
        )}
      </div>

      {/* Loading More Indicator */}
      {isFetchingNextPage && (
        <p className="text-center text-gray-500">Loading more stocks...</p>
      )}
    </div>
  );
};

export default ExploreScreen;


