import { NativeWindStyleSheet } from "nativewind";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screen } from "react-native-screens";
//Screens
import Home from "./src/screens/Home";

// Libreria para renderizar los estilos en la web
NativeWindStyleSheet.setOutput({
  default: "native",
});

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

          Sta


      </Stack.Navigator>
    </NavigationContainer>
  );
}
