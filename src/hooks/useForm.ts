import { useState } from 'react';

const useForm = () => {
  const [state, setState] = useState({});

  const handleChange = (e: Event) => {
    setState((prevState: object) => {
      const target = e.target as HTMLInputElement;
      return { ...prevState, [target.name]: target.value };
    });
  };

  return [state, handleChange];
};
