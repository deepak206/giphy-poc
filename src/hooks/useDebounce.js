import {useEffect, useState} from 'react';
/**
 *
 * Takes a value that can change over time and returns
 * a debounced version of it.
 *
 * @param value the value to be debounced
 * @param delay the minimum delay between updates. Changes to this value are not supported between re-renders
 * @returns {any} debounced value
 */
export function useDebounce(value, delay) {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(
      () => {
        if (value === debouncedValue) return;
  
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);
  
        return () => {
          clearTimeout(handler);
        };
      },
      [value]
    );
  
    return debouncedValue;
  }