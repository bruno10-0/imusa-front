import React from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { step2 } from "../../schemas/RegisterValidations";
import { initialValuesRegister } from "../../schemas/RegisterValidations";
import { setData } from "../../redux/reducers/RegisterSlice"; 
export default function Form2() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const nombre = useSelector((state) => state.register.data.nombre);
  const data = useSelector((state) => state.register.data);
  const handleSubmit = async (values) => {
    dispatch(setData(values));
    
  };

  return (
    <ScrollView
      className="w-full h-auto"
      contentContainerStyle={{ padding: 20 }}
    >
      <View>
        <Animated.View className="mb-10 w-full flex items-start justify-start gap-2 flex-col">
          <Text className="font-extrabold text-4xl text-secondary">
            {nombre},
          </Text>
          <Text className="text-white text-xl w-full">
            es un gusto tenerte por aqui. Continuemos con tu registro
          </Text>

          <Text className="text-gray-400">
            Todos los campos con <Text className="text-error">*</Text> son
            obligatorios
          </Text>
        </Animated.View>

        <Formik
          initialValues={initialValuesRegister}
          validationSchema={step2}
          onSubmit={handleSubmit}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit: formikSubmit,
            values,
            errors,
            touched,
            setFieldValue, // Añadido para manejar campos personalizados
          }) => (
            <View className="w-full">
              {/* Apellido */}
              <View>
                <Animated.View
                  entering={FadeInDown.delay(200).springify()}
                  className="w-full mb-2 border-b border-secondary/25 pb-2"
                >
                  <Text className="text-white font-bold mb-4 gap-1">
                    Apellido <Text className="text-error">*</Text>
                  </Text>
                  <TextInput
                    keyboardType="text"
                    className="text-white mb-2"
                    placeholder="Ej. Ramirez"
                    placeholderTextColor="#D3D3D3"
                    onChangeText={handleChange("apellido")}
                    onBlur={handleBlur("apellido")}
                    value={values.apellido}
                  />
                </Animated.View>
                {touched.apellido && errors.apellido && (
                  <Text className="w-full text-error mb-4">
                    {errors.apellido}
                  </Text>
                )}
              </View>

              {/* DNI */}
              <View>
                <Animated.View
                  entering={FadeInDown.delay(200).springify()}
                  className="w-full mb-2 border-b border-secondary/25 pb-2"
                >
                  <Text className="text-white font-bold mb-4 gap-1">
                    DNI <Text className="text-error">*</Text>
                  </Text>
                  <TextInput
                    keyboardType="numeric"
                    className="text-white mb-2"
                    placeholder="Ej. 22 333 444"
                    placeholderTextColor="#D3D3D3"
                    onChangeText={handleChange("DNI")}
                    onBlur={handleBlur("DNI")}
                    value={values.DNI}
                  />
                </Animated.View>
                {touched.DNI && errors.DNI && (
                  <Text className="w-full text-error mb-4">{errors.DNI}</Text>
                )}
              </View>

              {/* Teléfono */}
              <View>
                <Animated.View
                  entering={FadeInDown.delay(200).springify()}
                  className="w-full mb-2 border-b border-secondary/25 pb-2"
                >
                  <Text className="text-white font-bold mb-4 gap-1">
                    Teléfono <Text className="text-error">*</Text>
                  </Text>
                  <TextInput
                    keyboardType="numeric"
                    className="text-white mb-2"
                    placeholder="Ej. 123456789"
                    placeholderTextColor="#D3D3D3"
                    onChangeText={handleChange("telefono")}
                    onBlur={handleBlur("telefono")}
                    value={values.telefono}
                  />
                </Animated.View>
                {touched.telefono && errors.telefono && (
                  <Text className="w-full text-error mb-4">
                    {errors.telefono}
                  </Text>
                )}
              </View>

              {/*Correo*/}
              <View>
                <Animated.View
                  entering={FadeInDown.delay(200).springify()}
                  className="w-full mb-2 border-b border-secondary/25 pb-2"
                >
                  <Text className="text-white font-bold mb-4 gap-1">
                    Correo <Text className="text-error">*</Text>
                  </Text>
                  <TextInput
                    keyboardType="email-address"
                    className="text-white mb-2"
                    placeholder="correo@dominio.com"
                    placeholderTextColor="#D3D3D3"
                    onChangeText={handleChange("correo")}
                    onBlur={handleBlur("correo")}
                    value={values.correo}
                  />
                </Animated.View>
                {touched.correo && errors.correo && (
                  <Text className="w-full text-error mb-4">
                    {errors.correo}
                  </Text>
                )}
              </View>
              {/*Contraseña*/}
                <View>
                  <Animated.View
                    entering={FadeInDown.delay(200).springify()}
                    className="w-full mb-2 border-b border-secondary/25 pb-2"
                  >
                    <Text className="text-white font-bold mb-4 gap-1">
                      Contraseña <Text className="text-error">*</Text>
                    </Text>
                    <TextInput
                      className="text-white mb-2"
                      placeholder="Contraseña"
                      placeholderTextColor="#D3D3D3"
                      secureTextEntry
                      onChangeText={handleChange("contrasenia")}
                      onBlur={handleBlur("contrasenia")}
                      value={values.contrasenia}
                    />
                  </Animated.View>
                  {touched.contrasenia && errors.contrasenia && (
                    <Text className="w-full text-error mb-4">
                      {errors.contrasenia}
                    </Text>
                  )}
                </View>
              <TouchableOpacity
                className="w-full p-3 bg-secondary rounded-full my-4"
                onPress={formikSubmit}
              >
                <Text className="text-center font-bold text-white">
                  Siguiente
                </Text>
              </TouchableOpacity>

              <Animated.View
                entering={FadeInDown.delay(800).springify()}
                className="w-full flex flex-row gap-2 items-center"
              >
                <Text className="text-white">¿Ya tienes una cuenta?</Text>
                <TouchableOpacity onPress={() => navigation.push("Login")}>
                  <Text className="font-bold text-info">Iniciar Sesión</Text>
                </TouchableOpacity>
              </Animated.View>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  picker: {
    paddingVertical: 5,
    backgroundColor: "transparent",
    color: "white",
    borderWidth: 0, // Cambiado de 'border' a 'borderWidth'
  },
});
