const obtenerTipoPokemones = async () => {
  try {
    const respuesta = await fetch("https://pokeapi.co/api/v2/type/");
    const json = await respuesta.json();
    return json;
  } catch (err) {
    console.log(err);
  }
};

export default obtenerTipoPokemones;
