import { NativeWindStyleSheet } from "nativewind";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from 'react-redux';
import 
//Screens
import Home from "./src/screens/Home";

// Libreria para renderizar los estilos en la web
NativeWindStyleSheet.setOutput({
  default: "native",
});

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
F