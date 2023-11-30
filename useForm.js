import { useState } from 'react';

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  /**
   *
   * @param {*} tarjet Del evento se desestructura el target.
   */
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    formState[name] = value;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
