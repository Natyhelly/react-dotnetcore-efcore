import Atividade from "./pages/atividades/Atividade";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Cliente from "./pages/clientes/Cliente";
import Dashboard from "./pages/dashboard/Dashboard";
import ClienteForm from "./pages/clientes/ClienteForm";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/atividades/*" element={<Atividade />} />
      <Route path="/atividades/:id/cliente" element={<Atividade />} />
      <Route path="/clientes/*" element={<Cliente />} />
      <Route path="/cliente/:id/atividade" element={<Atividade />} />
      <Route path="/cliente/detalhes" element={<ClienteForm />} />
      <Route path="/cliente/detalhes/:id" element={<ClienteForm />} />
      <Route element={<PageNotFound />} />
    </Routes>
  );
}
