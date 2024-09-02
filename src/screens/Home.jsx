import React from "react";
import { Button, Text, View } from "react-native";
import { styled } from "nativewind";
import { useNavigation } from "@react-navigation/native";

const StyledView = styled(View);
const StyledText = styled(Text);

export default function Home() {
  const navigation = useNavigation();

  return (
    <StyledView className="flex-1 justify-center items-center bg-blue-500">
      <StyledText className="text-white text-lg">¡Hola Mundo! Estamos en el home ruta "protegida"</StyledText>
      <Button
        title="Go to register"
        onPress={() => navigation.navigate("Register")}
      />
    </StyledView>
  );
}
