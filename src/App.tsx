import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { Home } from "./pages/home/Home";
import ListaMetas from "./components/meta/listarmeta/ListarMeta";
import DeletarMeta from "./components/meta/deletarmeta/DeletarMeta";
import { TreinosList } from "./components/treino/TreinosList";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/metas" element={<ListaMetas />} />
        <Route path="/deletarmeta/:id" element={<DeletarMeta />} />
        <Route path="/treinos" element={<TreinosList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
