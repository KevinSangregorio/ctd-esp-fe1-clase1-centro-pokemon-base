import React from "react";
import { FormDataContext } from "../../context/ContextoFormulario";

const Detalle = () => {
  // Aqui deberíamos obtener los datos del formulario para poder mostrarlo en
  // la vista previa.

  return (
    <FormDataContext.Consumer>
      {({ formData }) => (
        <div className="detalle-formulario">
          <div className="encabezado">
            <h3>Vista Previa de la Solicitud</h3>
          </div>
          <section className="datos-cliente">
            <h4>Datos del Entrenador</h4>
            <div className="fila">
              <p>Nombre: {formData.nombre}</p>
              <p>Apellido: {formData.apellido}</p>
              <p>Email: {formData.email}</p>
            </div>
          </section>
          <section className="datos-cliente">
            <h4>Datos del Pokémon</h4>
            <div className="fila">
              <p>Nombre: {formData.nombrePokemon}</p>
            </div>
          </section>
          <button
            className="boton-enviar"
            onClick={() => alert("Solicitud enviada :)")}
          >
            Enviar Solicitud
          </button>
        </div>
      )}
    </FormDataContext.Consumer>
  );
};

export default Detalle;
