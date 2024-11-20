import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  Login,
  Home,
  ProtectedRoute,
  UserAuth,
  Configuracion,
  Categorias,
} from "../index";
export function MyRoutes() {
  const { user } = UserAuth();
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
        <Route path="/" element={<Home />} />
        <Route path="/configurar" element={<Configuracion />} />
        <Route path="/categorias" element={<Categorias />} />
      </Route>
    </Routes>
  );
}
