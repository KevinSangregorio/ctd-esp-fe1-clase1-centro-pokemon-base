import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Formulario from "./components/Formulario/Formulario";
import FormDataProvider from "./context/ContextoFormulario";

function App() {
  return (
    <FormDataProvider>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/formularioIngreso" element={<Formulario />} />
        </Routes>
      </div>
    </FormDataProvider>
  );
}

export default App;
