import { UBICACIONES } from "../../Data/Ubicaciones";

const initialState = {
  ubicaciones: UBICACIONES,
  selected: null,
  filteredUsers: [],
};

const UsuariosFiltradosReducer = (state = initialState, action) => {
  return state;
};

export default UsuariosFiltradosReducer;
