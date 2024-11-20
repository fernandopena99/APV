import styled from "styled-components";
import {
  UserAuth,
  BtnCircular,
  v,
  ListaMenuDesplegable,
  DesplegableUser,
  useAuthStore,
} from "../../index";
export function DataUser({ stateConfig }) {
  const { user } = UserAuth();
  const { signout } = useAuthStore();
  const funcionXtipo = async (tipo) => {
    if (tipo === "cerrarsesion") {
      await signout();
    }
  };
  return (
    <Container onClick={stateConfig.setState}>
      <div className="imgContainer">
        <img src={user.picture} />
      </div>

      <BtnCircular
        icono={<v.iconocorona />}
        width="25px"
        height="25px"
        bgcolor="#ffffff"
        textColor="#181616"
        fontsize="11px"
        translateX="-50px"
        translateY="-12px"
      />
      <span className="nombre">{user.name}</span>
      {stateConfig.state && (
        <ListaMenuDesplegable
          data={DesplegableUser}
          top="62px"
          funcion={(p) => funcionXtipo(p)}
        />
      )}
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  top: 0;
  right: 0;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50px;
  margin: 15px;
  cursor: pointer;
  .imgContainer {
    height: 40px;
    width: 40px;
    min-height: 40px;
    min-width: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.bg3};
  }
  .nombre {
    width: 100%;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }
`;
