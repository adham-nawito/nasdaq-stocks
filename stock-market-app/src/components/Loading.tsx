
import { Skeleton } from '@/components/ui/skeleton';

export function Loading()
{
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center gap-y-8">
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
    </div>
  );
}

function LoadingCard()
{
  return (
    <div className='space-y-2'>
      <Skeleton className="h-4 w-[650px]" />
      <Skeleton className="h-4 w-[650px]" />
      <Skeleton className="h-4 w-[650px]" />
    </div>
  );
}
