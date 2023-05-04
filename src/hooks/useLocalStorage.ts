import { useState, useEffect } from 'react';

const useLocalStorage = <T>(key: string, initialValue: T | (() => T)) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = localStorage.getItem(key);

      if (!item) {
        return initialValue;
      }

      if (typeof initialValue === 'function') {
        return (initialValue as () => T)();
      }

      return JSON.parse(item);
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as [T, (value: T) => void];
};

export default useLocalStorage;
