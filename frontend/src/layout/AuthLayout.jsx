import  {Outlet} from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <h1>Administrador de Paciente de Veterinario</h1>
      <Outlet/>
    </>
  )
}

export default AuthLayout