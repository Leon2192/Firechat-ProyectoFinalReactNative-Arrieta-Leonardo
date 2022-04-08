import React from "react";
import Perfil from "../Components/Perfil/Perfil";
import { useSelector, useDispatch } from "react-redux";
import { selectUsuario } from "../store/actions/UsuariosAction";

const Plataforma = ({ navigation }) => {
  const dispatch = useDispatch();
  const usuarios = useSelector((state) => state.usuarios.list);

  const handleDetail = (item) => {
    dispatch(selectUsuario(item.id));
    navigation.navigate("Detail", {
      name: item.name,
      id: item.id,
    });
  };

  return (
    <>
      <Perfil
        handleDetail={handleDetail}
        navigation={navigation}
        usuarios={usuarios}
      />
    </>
  );
};

export default Plataforma;
