import { USUARIOS } from "../../Data/Users";
import { select_usuario } from "../actions/UsuariosAction";

const initialState = {
  list: USUARIOS,
  selected: null,
};

const UsuariosReducer = (state = initialState, action) => {
  switch (action.type) {
    case select_usuario:
      const index = state.list.findIndex(
        (user) => user.id === action.usuarioId
      );
      if (index === -1) return state;

      return {
        ...state,
        selected: state.list[index],
      };
    default:
      return state;
  }
};

export default UsuariosReducer;
