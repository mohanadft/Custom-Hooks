import { useState } from 'react';

const useArray = <T>(defaultValue: T[]) => {
  const [array, setArray] = useState<T[]>(defaultValue);

  const push = (value: T) => {
    setArray(prevArray => [...prevArray, value]);
  };

  const remove = (index: number) => {
    setArray(prevArray => prevArray.filter((_, i) => i !== index));
  };

  const filter = (callbackFn: (e: T, i: number, arr: T[]) => boolean) => {
    setArray(prevArray =>
      prevArray.filter((e, i, arr) => callbackFn(e, i, arr))
    );
  };

  const update = (index: number, value: T) => {
    setArray(prevArray => prevArray.map((e, i) => (i === index ? value : e)));
  };

  const clear = () => {
    setArray([]);
  };

  return { array, set: setArray, push, remove, filter, update, clear };
};

export default useArray;
