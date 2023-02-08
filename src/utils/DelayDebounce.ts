import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from '@tanstack/react-query';
import { useRef } from 'react';

export const DelayDebounce = <Dataype>(
  refetch?: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<Dataype, unknown>>
) => {
  const timeOutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const delayDebounceFn = (time: number) => {
    if (timeOutRef.current) {
      console.log(timeOutRef);
      clearTimeout(timeOutRef.current);
    }
    timeOutRef.current = setTimeout(() => {
      refetch !== undefined ? refetch() : () => {};
    }, time);
  };

  return { delayDebounceFn };
};
