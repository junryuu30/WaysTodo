// import * as React from "react"
import React from "react";
import { Center, HStack, Image, Text, Input } from "native-base"
import loginImg from "../../../assets/loginImg.svg"
import { StyleSheet, TouchableOpacity } from "react-native"
// import InputComponent from "../InputComponent"
// import Axios from "react-native-axios/lib/core/Axios"
// import ButtonComponent from "../ButtonComponent"

const Login =({navigation})=>{
    // const [form, setForm] = React.useState({
    //     firstName:'',
    //     email:'',
    //     password:''
    // });

    // const handleOnChange= (name, value) => {
    //     setForm({
    //         ...form,
    //         [name]: value,
    //     });
    // };

    // const handleOnPress = async () => {
    //     try{
    //         const config = {
    //             headers:{
    //                 'Content-type': 'application/json',
    //             },
    //         };

    //         const body = JSON.stringify(form);
    //         const response = await Axios.post('https://api.kontenbase.com/query/api/v1/9dace928-23dd-439a-b8b7-1db74d51d23c/auth/register', body,config)
    //         console.log(response);
    //         if (response){
    //             await AsyncStorage.setItem('token', response.data.token);
    //         }

    //         const value = await AsyncStorage.getItem('token');
    //         if (value !== null) {
    //             console.log(value);
    //             navigation.navigate("Login")
    //         }
    //     }  catch (error) {
    //         console.log(error);
    //         alert(error.response.data.message);
    //     }

    // };


    return(
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
                <Text style={styleLogin.login}>Register</Text>
                <Center>
                    <Input
                    size="md"
                    type={"email"}
                    placeholder="Email"
                    mb={3}
                    // value={form.email}
                    width={300}
                    // onChangeText={(value) => handleOnChange("email", value)}
                    />
                    <Input
                        size="md"
                        placeholder="Name"
                        mb={3}
                        // value={form.firstName}
                        width={300}
                        // onChangeText={(value) => handleOnChange("firstName", value)}
                    />
                    <Input
                        type={"password"}
                        size="md"
                        placeholder="Password"
                        mb={3}
                        // value={form.password}
                        width={300}
                        // onChangeText={(value) => handleOnChange("password", value)}
                    />

                    <TouchableOpacity title="Login" style={styleLogin.buttonLogin}>
                        <Text style={{fontSize:20, fontWeight:'bold', color:"#FFFFFF"}} 
                            // onPress={handleOnPress}
                        >
                        Register
                        </Text>
                    </TouchableOpacity>

                    <HStack >
                        <Text style={styleLogin.user}
                        >Joined us before? </Text>
                        <Text style={styleLogin.regis}
                        onPress={() => navigation.navigate("Login")}
                        >Login</Text>
                    </HStack>

                </Center>
        </>
    )
}


const styleLogin = StyleSheet.create({
    login:{
        textAlign:"left",
        marginLeft: 20,
        fontSize: 35,
        fontWeight: "bold",
        marginVertical: 20

    },
    regis:{
        color: "#FF5555",
        marginTop: 20,
        fontWeight: "bold",
    },
    user:{
        marginTop: 20,
        fontWeight: "bold",
    },
    buttonLogin: {
        backgroundColor: '#FF5555',
        width: 310,
        height: 40,
        marginHorizontal:20,
        marginTop:20,
        marginBottom:12,
        display:"flex",
        justifyContent:"center",
        alignItems:'center',
        borderRadius:5,
    },

});

export default Login