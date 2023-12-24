import styled from "styled-components";
import { BsTrash, BsFillPencilFill } from "react-icons/bs";
import { colorPrimario } from "./UI/variables";

const Tabla = ({ categorias, onEditar, onEliminar }) => {
  return (
    <>
      <Table>
        <thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Descripción</Th>
            <Th>Editar</Th>
            <Th>Remover</Th>
          </Tr>
        </thead>
        <tbody>
          {categorias.map((categoria) => (
            <Tr key={categoria.id}>
              <Td>{categoria.nombre}</Td>
              <Td>
                <Contenido>{categoria.descripcion}</Contenido>
              </Td>
              <Td>
                <EditarIcon onClick={() => onEditar(categoria)} />
              </Td>
              <Td>
                <EliminarIcon onClick={() => onEliminar(categoria.id)} />
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Tabla;

const Table = styled.table`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  align-items: center;
`;

const Tr = styled.tr`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

const Th = styled.th`
  text-align: center;
  width: 24vw;
  padding: 2rem;
  border: 0.1rem solid white;
  padding: 1rem;
  align-items: center;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 2rem;
  border: 0.2rem solid ${colorPrimario};
`;

const Td = styled.td`
  text-align: center;
  width: 24vw;
  border: 0.1rem solid #9e9e9e;
  padding: 0.2rem;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 9vh;
`;
const Contenido = styled.p`
  overflow: auto;
  overflow-wrap: break-word;
  width: 100%;
  height: 4rem;
`;

const EditarIcon = styled(BsFillPencilFill)`
  cursor: pointer;
  margin-right: 10px;
  color: #04fe04;
  font-size: 1.8rem;
`;

const EliminarIcon = styled(BsTrash)`
  cursor: pointer;
  color: tomato;
  font-size: 1.8rem;
`;
