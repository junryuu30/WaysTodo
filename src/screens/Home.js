import React from "react"
import { Center, HStack, Image, Box } from "native-base"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import home from "../../assets/home.svg";
import ButtonComponent from "../components/ButtonComponent";



const Home =({navigation})=> {
    return(
        <Center>
            <Image
                source={home}
                alt="Alternate Text"
                size="250"
                borderRadius="full"
            />

            <HStack>
                <Text style={styles.ways}>Ways</Text>
                <Text style={styles.to}>To</Text>
                <Text style={styles.do}>Do</Text>
            </HStack>

            <Text style={styles.write}>
                Write your activity and finish your activity. Fast, Simple and Easy to Use
            </Text>
            <Box mt={30}>
                <TouchableOpacity title="Login" style={styles.buttonatas}>
                    <Text style={{fontSize:20, fontWeight:'bold', color:"#FFFFFF"}} 
                    onPress={() => navigation.navigate("Login")}>Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity title="Login" style={styles.buttonbawah}>
                    <Text style={{fontSize:20, fontWeight:'bold', color:"#FFFFFF"}} 
                    onPress={() => navigation.navigate("Register")}
                    >
                    Register
                    </Text>
                </TouchableOpacity>
            </Box>
            
            
        </Center>


    )
}

const styles = StyleSheet.create({
    ways: {
        marginRight: 10,
        fontSize: 30,
        fontWeight: "Bold",
    },
    to: {
        fontSize: 30,
        fontWeight: "Bold",
        color: "#B82020",
    },
    do: {
        fontSize: 30,
        fontWeight: "Bold",
        color: "#FF5555"
    },
    write: {
        marginVertical: 20,
        marginHorizontal: 40,
        textAlign: "center",
        fontSize: 15,
    },
    buttonatas: {
        backgroundColor: '#FF5555',
        width: 310,
        height: 40,
        marginHorizontal:20,
        marginTop:50,
        display:"flex",
        justifyContent:"center",
        alignItems:'center',
        borderRadius:5,
    },
    buttonbawah: {
        backgroundColor: 'grey',
        width: 310,
        height: 40,
        marginHorizontal:20,
        marginTop:20,
        display:"flex",
        justifyContent:"center",
        alignItems:'center',
        borderRadius:5,
    },

});




export default Home

