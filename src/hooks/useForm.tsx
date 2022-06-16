import { ChangeEvent, useState } from 'react';

// const useForm = <T extends Object>(initState: T) => {
function useForm<T>(initState: T) {
  const [forms, setForms] = useState(initState);

  // const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setForms({
      ...forms,
      [name]: value,
    });
  };
  return {
    forms,
    handleChange,
    ...forms,
  };
}

export default useForm;
