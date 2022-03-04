import React, { useState, useContext } from "react";
import { FormDataContext } from "../../context/ContextoFormulario";

const Input = ({ name, label, type = "text" }) => {
  const { handleInputBlur } = useContext(FormDataContext);

  const [fieldValue, setFieldValue] = useState("");

  const onChange = (e) => setFieldValue(e.target.value);

  const onBlur = (e) => {
    e.preventDefault();

    let type;

    if (name === "nombre" || name === "apellido" || name === "email") {
      type = "ACTUALIZAR_ENTRENADOR";
    } else if (
      name === "nombrePokemon" ||
      name === "tipoPokemon" ||
      name === "elementoPokemon" ||
      name === "alturaPokemon" ||
      name === "edadPokemon"
    ) {
      type = "ACTUALIZAR_POKEMON";
    }

    handleInputBlur(
      {
        campo: name,
        valor: e.target.value,
      },
      type
    );
  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={fieldValue}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
