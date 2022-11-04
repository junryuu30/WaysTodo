import { Text } from "native-base"
import { TouchableOpacity, StyleSheet } from "react-native"


const ButtonComponent =({name, color})=>{
    return(
        <>
        <TouchableOpacity style={color === "red" ? styles.red: styles.gray}>
            <Text style={{color: "white", fontWeight:"bold"}}>{name}</Text>
        </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    red: {
        paddingHorizontal: 110,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: "#FF5555",
        color: "white",
        height: 40, 
    },
    gray: {
        marginTop: 20,
        backgroundColor: "#e0e0d1",
        color: "white",
        height: 40,
        paddingHorizontal: 110,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
  });


export default ButtonComponent
