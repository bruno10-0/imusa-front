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
          uri: "https://cdn.leonardo.ai/users/153ea7d4-0771-43b9-b082-89b9688f8af5/generations/b3c25d1b-4741-4439-b898-71d5c43cfcd1/Illustrative_Albedo_En_la_imagen_proporcionada_reemplaza_todos_0.jpg",
        }}
      />
      <View className="h-full w-full flex justify-center items-center px-4">
        <View
          className="h-auto w-full flex justify-center p-2 py-24 rounded-lg"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(0px)",
          }}
        >
          {/* Título */}
          <View className="flex items-center">
            <Animated.Text
              entering={FadeInUp.delay(200).springify()}
              className="text-white font-bold text-5xl mb-4"
            >
              Bienvenido
            </Animated.Text>
            <Animated.Text
              entering={FadeInUp.delay(200).springify()}
              className="text-white font-bold text-xl mb-4"
            >
              Inicia sesión para continuar
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
              <View className="items-center p-4">
                <Animated.View
                  entering={FadeInDown.delay(200).springify()}
                  className="bg-white/30 p-4 rounded-lg w-full mb-4"
                >
                  <Text className="text-white font-bold text-lg mb-1">
                    Correo electrónico*
                  </Text>
                  <TextInput
                    className="text-white mb-2"
                    placeholder="alguien@ejemplo.com"
                    placeholderTextColor="white"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                  />
                </Animated.View>
                {touched.email && errors.email && (
                  <Text className="w-full text-lg text-error">
                    {errors.email}
                  </Text>
                )}
                <Animated.View
                  entering={FadeInDown.delay(400).springify()}
                  className="bg-white/25 p-4 rounded-lg w-full my-4"
                >
                  <Text className="text-white font-bold text-lg mb-1">
                    Contraseña*
                  </Text>
                  <TextInput
                    className="text-white mb-2"
                    placeholder="Contraseña"
                    placeholderTextColor="white"
                    secureTextEntry
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                  />
                </Animated.View>
                {touched.password && errors.password && (
                  <Text className="w-full text-lg text-error mb-4">
                    {errors.password}
                  </Text>
                )}
                <Animated.View
                  entering={FadeInDown.delay(800).springify()}
                  className="w-full"
                >
                  <Animated.View
                    entering={FadeInDown.delay(600).springify()}
                    className="flex-row mt-4 mb-6"
                  >
                    <Text className="text-white">
                      ¿Olvidaste tu contraseña?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.push("Signup")}>
                      <Text className="font-bold text-info border-info border-b">
                        {" "}
                        Recuperar contraseña
                      </Text>
                    </TouchableOpacity>
                  </Animated.View>

                  <TouchableOpacity
                    className="w-full p-3 bg-primary rounded-lg mb-4"
                    onPress={formikSubmit}
                  >
                    <Text className="text-center font-bold text-white ">
                      Iniciar Sesión
                    </Text>
                  </TouchableOpacity>
                </Animated.View>
                <Animated.View className="w-full flex flex-col justify-center items-center gap-4">
                  <Text className="text-white">¿No tienes una cuenta?</Text>
                  <Text className="text-info">Registrarse</Text>
                </Animated.View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </View>
  );
}
