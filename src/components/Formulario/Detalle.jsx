import React from "react";
import PropTypes from "prop-types";

/**
 * Componente que renderiza la vista previa de la solicitud en la parte derecha (url: http://localhost:3000/formularioIngreso)
 *
 * Consume el contexto de FormDataContext mediante el método .Consumer para poder acceder al estado global (state)
 *
 * @returns {component}
 */
const Detalle = ({ state }) => {
  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre: {state.nombre}</p>
          <p>Apellido: {state.apellido}</p>
          <p>Email: {state.email}</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre: {state.nombrePokemon}</p>
          <p>Tipo: {state.tipoPokemon}</p>
          <p>Elemento: {state.elementoPokemon}</p>
          <p>Altura en cm: {state.alturaPokemon}</p>
          <p>Edad: {state.edadPokemon}</p>
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={() => alert("Solicitud enviada :)")}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

Detalle.propTypes = {
  state: PropTypes.shape({
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    email: PropTypes.string,
    nombrePokemon: PropTypes.string,
    tipoPokemon: PropTypes.string,
    elementoPokemon: PropTypes.string,
    alturaPokemon: PropTypes.string,
    edadPokemon: PropTypes.string,
  }),
};

export default Detalle;
