import {Link} from "react-router-dom";

const Login = () => {
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">Inicia Sesion y Administra tus {""}<span className="text-black">Pacientes</span></h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white ">
        <form>
          <div className="my-5">
            <label
              className="uppercase text-gray-600 text-xl font-bold"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Email de registro"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            />
          </div>
          <div className="my-5">
            <label
              className="uppercase text-gray-600 text-xl font-bold"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Tu password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            />
            <input
              type="submit"
              value="Iniciar Sesion"
              className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
            />
          </div>
        </form>
        <nav className="mt-10 lg:flex lg:justify-between">
            <Link 
            className="block text-center my-5 text-gray-500"
            to="/registrar">No tienes una cuenta? Registrate</Link>
            <Link 
            className="block text-center my-5 text-gray-500"
            to="/olvide-password">Olvide mi Password</Link>
          </nav>
      </div>
    </>
  )
}

export default Login