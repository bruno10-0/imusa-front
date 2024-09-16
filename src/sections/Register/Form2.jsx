import React from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { Picker } from "@react-native-picker/picker";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { setStep } from "../../redux/reducers/RegisterSlice";
import { step2 } from "../../schemas/RegisterValidations";

export default function Form2() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const name = useSelector((state) => state.register.data.name);

  const handleSubmit = async (values) => {
    dispatch(setStep(2));
    // Aquí podrías despachar otra acción si es necesario
  };

  return (
    <View className="w-full h-auto">
      <Animated.View className="mb-10 w-full flex items-start justify-start gap-2 flex-col">
        <Text className="text-white text-xl w-full">
          Muy bien, es un gusto tenerte por aqui. Continuemos con tu registro
        </Text>
        <Text className="font-extrabold text-4xl text-secondary mb-2">
          {name}
        </Text>
        <Text className="text-gray-400">
          Todos los campos con <Text className="text-error">*</Text> son
          obligatorios
        </Text>
      </Animated.View>

      <Formik
        initialValues={{
          lastname: useSelector((state) => state.register.data.lastname),
          birthDate: useSelector((state) => state.register.data.birthDate),
          gender: useSelector((state) => state.register.data.gender),
          phone: useSelector((state) => state.register.data.phone),
          dni: useSelector((state) => state.register.data.dni),
        }}
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
                  onChangeText={handleChange("lastname")}
                  onBlur={handleBlur("lastname")}
                  value={values.lastname}
                />
              </Animated.View>
              {touched.lastname && errors.lastname && (
                <Text className="w-full text-error mb-4">
                  {errors.lastname}
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
                  onChangeText={handleChange("dni")}
                  onBlur={handleBlur("dni")}
                  value={values.dni}
                />
              </Animated.View>
              {touched.dni && errors.dni && (
                <Text className="w-full text-error mb-4">{errors.dni}</Text>
              )}
            </View>

            {/* Fecha de nacimiento */}
            <View>
              <Animated.View
                entering={FadeInDown.delay(200).springify()}
                className="w-full mb-2 border-b border-secondary/25 pb-2"
              >
                <Text className="text-white font-bold mb-4 gap-1">
                  Fecha de nacimiento <Text className="text-error">*</Text>
                </Text>
                <TextInput
                  keyboardType="numeric"
                  className="text-white mb-2"
                  placeholder="Ej. 19/12/1990"
                  placeholderTextColor="#D3D3D3"
                  onChangeText={handleChange("birthDate")}
                  onBlur={handleBlur("birthDate")}
                  value={values.birthDate}
                />
              </Animated.View>
              {touched.birthDate && errors.birthDate && (
                <Text className="w-full text-error mb-4">
                  {errors.birthDate}
                </Text>
              )}
            </View>

            {/* Sexo */}
            <View>
              <Animated.View
                entering={FadeInDown.delay(200).springify()}
                className="w-full mb-2 border-b border-secondary/25 pb-2"
              >
                <Text className="text-white font-bold mb-4 gap-1">
                  Sexo <Text className="text-error">*</Text>
                </Text>
                <Picker
                  selectedValue={values.gender}
                  onValueChange={(itemValue) =>
                    setFieldValue("gender", itemValue)
                  }
                  style={styles.picker}
                >
                  <Picker.Item label="Masculino" value="Masculino" />
                  <Picker.Item label="Femenino" value="Femenino" />
                  <Picker.Item label="Otro" value="Otro" />
                </Picker>
              </Animated.View>
              {touched.gender && errors.gender && (
                <Text className="w-full text-error mb-4">{errors.gender}</Text>
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
                  onChangeText={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                  value={values.phone}
                />
              </Animated.View>
              {touched.phone && errors.phone && (
                <Text className="w-full text-error mb-4">{errors.phone}</Text>
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
