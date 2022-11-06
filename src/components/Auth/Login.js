import React from "react";
import { Center, HStack, Image, Text, Input } from "native-base";
import loginImg from "../../../assets/loginImg.svg";
import { StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Login = (props) => {
  const [form, setForm] = React.useState({
    email:"",
    password:"",
});

const handleOnChange = (name, value) => {
    setForm({
        ...form,
        [name]: value,
    });
};

const handleOnPress = async () => {
    try{
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const body = JSON.stringify(form);
        const response = await axios.post("https://api.v2.kontenbase.com/query/api/v1/fda30547-2f96-4e2c-a3f6-8dd874ae9472/auth/login", body, config);
        console.log(response);

        // untuk merelasikan semua tablenya
        if (response) {
          await AsyncStorage.setItem('token', response.data.token);
          await AsyncStorage.setItem('user_id', response.data.user._id);
          await AsyncStorage.setItem('user_name', response.data.user.firstName);
      }
        const value = await AsyncStorage.getItem("token");

        if (value !== null){
            console.log(value);
            props.navigation.navigate("MyTab");
        }
    }
    catch (error){
        console.log(error);
        alert(error.response.data.message);
    }
}


  return (
    <>
      <Center>
        <Image
          mt={35}
          source={loginImg}
          alt="Alternate Text"
          size="250"
          borderRadius="full"
        />
      </Center>
      <Text style={styleLogin.login}>Login</Text>
      <Center>
        <Input
          size="md"
          type={"email"}
          placeholder="Email"
          mb={5}
          value={form.email}
          width={300}
          onChangeText={(value) => handleOnChange("email", value)}
        />
        <Input
          type={"password"}
          size="md"
          placeholder="Password"
          mb={5}
          value={form.password}
          width={300}
          onChangeText={(value) => handleOnChange("password", value)}
        />
        <TouchableOpacity title="Login" style={styleLogin.buttonLogin}>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", color: "#FFFFFF" }}
            // onPress={() => navigation.navigate("MyTab")}
            onPress={handleOnPress}
          >
            Login
          </Text>
        </TouchableOpacity>
        <HStack>
          <Text style={styleLogin.user}>New Users? </Text>
          <Text
            style={styleLogin.regis}
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </Text>
        </HStack>
      </Center>
    </>
  );
};

const styleLogin = StyleSheet.create({
  login: {
    textAlign: "left",
    marginLeft: 20,
    fontSize: 35,
    fontWeight: "bold",
    marginVertical: 20,
  },
  regis: {
    color: "#FF5555",
    marginTop: 20,
    fontWeight: "bold",
  },
  user: {
    marginTop: 20,
    fontWeight: "bold",
  },
  buttonLogin: {
    backgroundColor: "#FF5555",
    width: 310,
    height: 40,
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});

export default Login;
