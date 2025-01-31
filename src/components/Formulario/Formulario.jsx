import React, { useContext } from "react";
import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";
import entrenador from "../../assets/entrenador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input/Input";
import Detalle from "./Detalle";
import { FormDataContext } from "../../context/ContextoFormulario";
import { useQuery } from "react-query";
import obtenerTipoPokemones from "../../services/tipoPokemones";

/**
 * Componente que renderiza el header,  formulario donde se completan los datos para la solicitud de atención (url: http://localhost:3000/formularioIngreso)
 *
 * Se consume el contexto mediante el hook useContext.
 *
 * @returns {component}
 */
const Formulario = () => {
  const { state } = useContext(FormDataContext);

  //const tiposPokemones = ["agua", "tierra", "fuego", "aire"];

  const {
    data: tiposPokemones,
    isLoading,
    error,
  } = useQuery("getPokemones", obtenerTipoPokemones);

  
  return (
    <>
      <header className="form-header">
        <div>
          <img src={pokebola} alt="pokebola" />
          <h2>Centro Pokemon de Ash</h2>
        </div>
        <Link className="volver" to="/">
          Home
        </Link>
      </header>
      <div className="formulario-ingreso">
        <h3>Solicitud de atención</h3>
        <p>
          Por favor, completa el formulario para que podamos atender a tu
          pokémon
        </p>
        <div className="cuerpo-formulario">
          <div className="inputs">
            <div>
              <p className="nombre-seccion">
                <img src={entrenador} alt="entrenador" />
                <span>ENTRENADOR</span>
              </p>
              <Input name="nombre" label="Nombre" />
              <Input name="apellido" label="Apellido" />
              <Input name="email" label="Email" type="email" />
            </div>
            <div>
              <p className="nombre-seccion">
                <img src={pikachu} alt="pikachu" />
                <span>POKEMON</span>
              </p>
              <Input name="nombrePokemon" label="Nombre" />

              <div className="input-contenedor">
                <label htmlFor="tipoPokemon">Tipo</label>
                <select name="tipoPokemon" id="tipoPokemon">
                  {!isLoading && !error ? (
                    tiposPokemones.results.map((tipoPokemon, index) => {
                      return (
                        <option
                          key={tipoPokemon.name + index}
                          value={tipoPokemon.name}
                        >
                          {tipoPokemon.name}
                        </option>
                      );
                    })
                  ) : (
                    <option value="No results" disabled>
                      No hay resultados
                    </option>
                  )}
                </select>
              </div>

              <Input name="elementoPokemon" label="Elemento" />
              <Input name="alturaPokemon" label="Altura" type="number" />
              <Input name="edadPokemon" label="Edad" type="number" />
            </div>
          </div>
          <Detalle state={state} />
        </div>
      </div>
    </>
  );
};

export default Formulario;
