import { useState } from "react";

export function useFetching(
  callback: Function
): [fetching: Function, isLoading: boolean, error: string | null] {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
      setError(null);
    } catch (e: any) {
      if (e.message) setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
}
