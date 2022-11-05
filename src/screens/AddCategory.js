import { Input, Text, VStack, View, HStack, Button, Center } from "native-base"
import { StyleSheet, TouchableOpacity } from "react-native"




const AddCategory = () => {
    return(
        <>
        <View>
                <Text 
                style={style.AddCategory}
                >Add Category</Text>
            
            <VStack space={2} alignItems="center">
                    <Input size="md" 
                    placeholder="Name" 
                    width={270} 
                    mb={2}
                    />

                    <TouchableOpacity title="Login" style={style.btn}

                    >
                        <Text 
                        style={{fontSize:20, fontWeight:'bold', color:"#FFFFFF"}}
                         
                        >Add List
                        </Text>
                    </TouchableOpacity>
            </VStack>
            
                <Text m={30}
                    style={style.Addlist}
                >List Category</Text>

                <Center>
                    <HStack space={6} mt="6">
                    <Button size="sm" variant="subtle">
                        <Text>hallo</Text>
                    </Button>
                    </HStack>

                </Center>
                

        </View>
        </>
    )
}

const style = StyleSheet.create({
    AddCategory:{
        textAlign:"left",
        marginLeft: 57,
        marginTop: 35,
        fontSize: 25,
        fontWeight: "bold",
        marginVertical: 20
    },
    Addlist:{
        textAlign:"left",
        marginLeft: 57,
        marginTop: 20,
        fontSize: 25,
        fontWeight: "bold",
        marginVertical: 20
    },
    btn: {
        backgroundColor: '#FF5555',
        width: 270,
        height: 40,
        marginHorizontal:20,
        marginTop:15,
        display:"flex",
        justifyContent:"center",
        alignItems:'center',
        borderRadius:5,
    },

})

export default AddCategory