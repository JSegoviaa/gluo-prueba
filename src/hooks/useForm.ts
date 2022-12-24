import { ChangeEvent, useState } from 'react';

export const useForm = <T extends Object>(initialState: T) => {
  const [form, setForm] = useState(initialState);

  const handleChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;

    setForm({ ...form, [name]: value });
  };

  const reset = () => setForm(initialState);

  return { form, handleChange, reset };
};
