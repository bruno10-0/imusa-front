import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import LoginValidation from "../schemas/LoginValidation";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
export default function Login() {
  const navigation = useNavigation();
  // Función para manejar el envío del formulario
  const handleSubmit = async (values) => {
    try {
      // Aquí puedes enviar los valores al backend usando axios o fetch
      console.log(values); // Para pruebas, solo imprime los valores en la consola
      // Ejemplo de respuesta ficticia para ilustrar la lógica:
      const response = { success: true }; // Reemplaza con tu llamada al backend

      if (response.success) {
        navigation.navigate("MainPage"); // Redirige si la autenticación es exitosa
      } else {
        Alert.alert("Error", "Credenciales inválidas"); // Muestra un error si el inicio de sesión falla
      }
    } catch (error) {
      Alert.alert("Error", "Ocurrió un error al iniciar sesión");
    }
  };

  return (
    <View className="h-full w-full justify-center items-center">
      <Animated.Image
        entering={FadeInUp.delay(200).duration(1000)}
        className="h-full w-full absolute"
        source={{
          uri: "https://i.pinimg.com/736x/ce/9d/89/ce9d892863cdef05531c21645f80551f.jpg",
        }}
      />
      <View className="h-full w-full flex justify-center items-center px-4">
        <View className="h-auto w-full flex justify-center bg-black/5 p-2 py-10  backdrop-blur-lg rounded-2xl">
          {/* Título */}
          <View className="flex items-center">
            <Animated.Text
              entering={FadeInUp.delay(200).springify()}
              className="text-primary font-bold text-7xl uppercase"
            >
              Data Pet
            </Animated.Text>
            <Animated.Text
              entering={FadeInUp.delay(200).springify()}
              className="text-white font-bold text-xl mb-5"
            >
              El mejor amigo de tu amigo
            </Animated.Text>
          </View>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginValidation}
            onSubmit={handleSubmit}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit: formikSubmit,
              values,
              errors,
              touched,
            }) => (
              <View className="flex items-center mx-4 space-y-4">
                <Animated.View
                  entering={FadeInDown.delay(200).springify()}
                  className="bg-white/25 p-4 rounded-2xl w-full"
                >
                  <TextInput
                    className="text-white font-bold text-lg"
                    placeholder="Correo electrónico"
                    placeholderTextColor="white"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                  />
                </Animated.View>
                {touched.email && errors.email && (
                  <Text className="w-full text-lg text-red-500">
                    {errors.email}
                  </Text>
                )}
                <Animated.View
                  entering={FadeInDown.delay(400).springify()}
                  className="bg-white/25 p-4 rounded-2xl w-full"
                >
                  <TextInput
                    className="text-white font-bold text-lg"
                    placeholder="Contraseña"
                    placeholderTextColor="white"
                    secureTextEntry
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                  />
                </Animated.View>
                {touched.password && errors.password && (
                  <Text className="w-full text-lg text-red-500">
                    {errors.password}
                  </Text>
                )}
                <Animated.View
                  entering={FadeInDown.delay(800).springify()}
                  className="w-full"
                >
                  <TouchableOpacity
                    className="w-full p-3 bg-primary rounded-2xl mb-2"
                    onPress={formikSubmit}
                  >
                    <Text className="text-center font-bold text-white">
                      Iniciar Sesión
                    </Text>
                  </TouchableOpacity>
                </Animated.View>
                <Animated.View
                  entering={FadeInDown.delay(600).springify()}
                  className="flex-row"
                >
                  <Text className="text-white">¿Olvidaste tu contraseña?</Text>
                  <TouchableOpacity onPress={() => navigation.push("Signup")}>
                    <Text className="font-bold text-primary">
                      {" "}
                      Recuperar contraseña
                    </Text>
                  </TouchableOpacity>
                </Animated.View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </View>
  );
}
