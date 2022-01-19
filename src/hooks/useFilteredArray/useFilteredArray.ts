import { useMemo } from "react";

export function useFilteredArray<T>(
  array: Array<T>,
  word: string,
  filterCallback: (value: T, index: number, array: T[]) => unknown
) {
  const filteredArray = useMemo(
    () => [...array].filter(filterCallback),
    [array, word]
  );
  return filteredArray;
}
