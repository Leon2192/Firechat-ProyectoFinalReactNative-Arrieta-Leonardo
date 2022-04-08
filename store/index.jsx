import { createStore, combineReducers } from "redux";

// Reducers
import UsuariosReducer from "./reducers/UsuariosReducer";
import UsuariosFiltradosReducer from "./reducers/UsuariosFilradosReducer";

const rootReducer = combineReducers({
  usuarios: UsuariosReducer,
  usuariosFiltrados: UsuariosFiltradosReducer
});

export default createStore(rootReducer);
