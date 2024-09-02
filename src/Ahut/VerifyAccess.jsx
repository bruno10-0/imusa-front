import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const VerifyAccess = ({ children }) => {
  const navigation = useNavigation();
  const isAuthenticated = true
  // useSelector((state) => state.auth.isAuthenticated);  

  useEffect(() => {
    if (!isAuthenticated) {
      navigation.navigate("Login"); // Redirige a la pantalla de inicio de sesión si no está autenticado
    }
  }, [isAuthenticated, navigation]);

  // Renderiza los hijos si está autenticado
  if (!isAuthenticated) {
    return <>{children}</>;
  }

  // Puedes devolver un componente de carga o vacío mientras se verifica la autenticación
  return null;
};

export default VerifyAccess;