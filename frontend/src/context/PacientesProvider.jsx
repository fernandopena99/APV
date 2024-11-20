import { createContext, useState, useEffect, Children } from "react";
import clienteAxios from "../config/axios";
import useAuth from "../hooks/useAuth";

const PacientesContext = createContext();

export const PacientesProvider = ({ children }) => {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  const {auth} = useAuth();

  useEffect(() => {
    const obtenerPaciente = async () => {

      try {
        const token = localStorage.getItem("token");
        if (!token) return

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }
        const { data } = await clienteAxios("/pacientes", config);
        setPacientes(data);

      } catch (error) {
        console.log(error);
      }
    }

    obtenerPaciente();
  }, [auth])


  const guardarPaciente = async (paciente) => {

    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }

    if (paciente.id) {
      try {
        const {data} = await clienteAxios.put(`/pacientes/${paciente.id}`, paciente, config)
        const pacientesActualizado = pacientes.map(pacienteState => pacienteState._id === data._id ? data : pacienteState);
        setPacientes(pacientesActualizado);
      } catch (error) {
        console.log(error);
      }
    } else {

      try {

        const { data } = await clienteAxios.post("/pacientes", paciente, config);
        const { createdAt, updateAt, __v, ...pacienteAlmacenado } = data
        setPacientes([pacienteAlmacenado, ...pacientes]);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    }

  }

  const setEdicion = (paciente) => {
    setPaciente(paciente);
  }

  const eliminarPaciente = async id => {
    const confirmar = confirm("Confirmar que deseas eliminar?");

    if (confirmar) {
      try {
        const token = localStorage.getItem("token");
        if (!token) return

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }
        await clienteAxios.delete(`/pacientes/${id}`, config);
        const pacientesActualizado = pacientes.filter(pacientesStates => pacientesStates._id !== id);

        setPacientes(pacientesActualizado);

      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <PacientesContext.Provider

      value={{
        pacientes,
        guardarPaciente,
        setEdicion,
        paciente,
        eliminarPaciente
      }}
    >
      {children}
    </PacientesContext.Provider>
  )
}



export default PacientesContext;