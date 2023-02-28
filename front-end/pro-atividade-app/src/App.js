import Atividade from "./pages/atividades/Atividade";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Cliente from "./pages/clientes/Cliente";
import Dashboard from "./pages/dashboard/Dashboard";
import ClienteForm from "./pages/clientes/ClienteForm";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/clientes/lista" component={Cliente} />
      <Route path="/atividades/lista" component={Atividade} />
      <Route path="/cliente/:id/atividade" component={Atividade} />
      <Route path="/cliente/detalhes/:id?" component={ClienteForm} />
      <Route component={PageNotFound} />
    </Switch>
  );
}
