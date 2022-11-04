import {  Center, HStack, Image, Text, Input } from "native-base"
import loginImg from "../../../assets/loginImg.svg"
import { StyleSheet, TouchableOpacity } from "react-native"
import InputComponent from "../InputComponent"
import ButtonComponent from "../ButtonComponent"


const Login =({navigation})=>{
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
            <Text style={styleLogin.login}>Login</Text>
            <Center>
                <Input
                    size="md"
                    type={"email"}
                    placeholder="Email"
                    mb={5}
                    // value={form.email}
                    width={300}
                    // onChangeText={(value) => handleOnChange("email", value)}
                    />
                <Input
                    type={"password"}
                    size="md"
                    placeholder="Password"
                    mb={5}
                    // value={form.password}
                    width={300}
                    // onChangeText={(value) => handleOnChange("password", value)}
                />
                <TouchableOpacity title="Login" style={styleLogin.buttonLogin}>
                    <Text style={{fontSize:20, fontWeight:'bold', color:"#FFFFFF"}} 
                    onPress={() => navigation.navigate("MyTab")}
                    >Login
                    </Text>
                </TouchableOpacity>
                <HStack >
                    <Text style={styleLogin.user}>New Users? </Text>
                    <Text style={styleLogin.regis}
                    onPress={() => navigation.navigate("Register")}
                    >Register</Text>
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
        marginTop:30,
        marginBottom:12,
        display:"flex",
        justifyContent:"center",
        alignItems:'center',
        borderRadius: 5,
    },

});

export default Login