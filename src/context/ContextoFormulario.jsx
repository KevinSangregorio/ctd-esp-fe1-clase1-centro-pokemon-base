// Aqui debemos crear nuestro contexto y nuestro provider.
import { createContext, useState } from "react";

export const FormDataContext = createContext();

const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    nombrePokemon: "",
  });

  const handleInputBlur = (input) => {
    const { campo, valor } = input;

    setFormData({
      ...formData,
      [campo]: valor
    });
  };

  return (
    <FormDataContext.Provider
      value={{
        formData,
        handleInputBlur
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
};

export default FormDataProvider;
