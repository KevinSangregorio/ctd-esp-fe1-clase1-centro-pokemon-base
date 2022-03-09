import { createContext, useState, useReducer } from "react";

export const FormDataContext = createContext();

const initialState = {
  nombre: "",
  apellido: "",
  email: "",
  nombrePokemon: "",
  tipoPokemon: "",
  elementoPokemon: "",
  alturaPokemon: "",
  edadPokemon: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ACTUALIZAR_ENTRENADOR":
      return { ...state, ...action.payload };
    case "ACTUALIZAR_POKEMON":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const FormDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputBlur = (input, type) => {
    const { campo, valor } = input;

    dispatch({
      type,
      payload: { [campo]: valor },
    });
  };

  return (
    <FormDataContext.Provider
      value={{
        state,
        handleInputBlur,
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
};

export default FormDataProvider;
