import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Formulario from "./components/Formulario/Formulario";
import FormDataProvider from "./context/ContextoFormulario";
import { QueryClient, QueryClientProvider } from "react-query";


/**
 * Componente principal de la app que tiene el ruteo
 * 
 * Envuelvo el componente con QueryClienteProvider para poder utilizar react-query en los componentes contenidos.
 * 
 * Utilizo FormDataProvider para tener acceso al contexto en todos los componentes.
 * 
 * @returns {JSX.Element}
 */
function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}> 
      <FormDataProvider>
        <div className="App">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/formularioIngreso" element={<Formulario />} />
          </Routes>
        </div>
      </FormDataProvider>
    </QueryClientProvider>
  );
}

export default App;
