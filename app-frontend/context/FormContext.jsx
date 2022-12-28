import { useState, createContext, useContext, useCallback } from "react";

export const FormContext = createContext();

export default function FormProvider({ children }) {
  const [data, setData] = useState({});

  const setFormValues = useCallback((key, values) => {
    setData((prevValues) => ({
      ...prevValues,
      [key]: {
        ...prevValues[key],
        ...values,
      },
    }));
  }, []);

  return (
    <FormContext.Provider value={{ data, setFormValues }}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormData = () => useContext(FormContext);
