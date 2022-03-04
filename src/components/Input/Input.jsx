import React, { useState, useContext } from "react";
import { FormDataContext } from "../../context/ContextoFormulario";

const Input = ({ name, label, type = "text" }) => {
  // Aqui deberíamos acceder al estado global para poder obtener los datos
  // del formulario y una manera de actualizar los mismos.
  const { handleInputBlur } = useContext(FormDataContext);

  // También, utilizaremos un estado local para manejar el estado del input.
  const [fieldValue, setFieldValue] = useState("");

  const onChange = (e) => setFieldValue(e.target.value);

  const onBlur = (e) => {
    e.preventDefault();

    // Aqui deberíamos actualizar el estado global con los datos de
    // cada input.
    // TIP: Podemos utilizar el nombre de cada input para guardar
    // los datos en el estado global usando una notación de { clave: valor }
    handleInputBlur({
      campo: name,
      valor: e.target.value,
    });
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
