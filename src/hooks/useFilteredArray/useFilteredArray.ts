import { useMemo } from "react";

export function useFilteredArray<T>(
  array: Array<T>,
  word: string | undefined,
  filterCallback: (value: T, index: number, array: T[]) => unknown
) {
  const filteredArray = useMemo(() => {
    if (word) {
      return [...array].filter(filterCallback);
    }
    return array;
  }, [array, word]);
  return filteredArray;
}
