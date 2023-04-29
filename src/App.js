import { Routes, Route, BrowserRouter } from "react-router-dom";
import VerPersonas from "./components/VerPersonas";
import CreatePersona from "./components/CreatePersona";
import EditarPersona from "./components/EditarPersona";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<VerPersonas/>} />
          <Route path="/create" element ={<CreatePersona/>} />
          <Route path="/edit/:id" element ={<EditarPersona/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
