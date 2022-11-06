import AsyncStorage from "@react-native-async-storage/async-storage";
import { Input, Text, VStack, View, Button,  FlatList, ScrollView } from "native-base"
import { StyleSheet, TouchableOpacity } from "react-native"
import axios from 'axios';
import * as React from 'react'




const AddCategory = () => {
    const [category, setCategory] = React.useState({ user_id: null });
    const [dataCategory, setDataCategory] = React.useState([])
    
    function handleOnChange(name, value) {
        setCategory({
            ...category,
            [name]: value,
        })
    }

    const handleAddCategory = async () => {
        try {
          const token = await AsyncStorage.getItem("token");
          const user_id = await AsyncStorage.getItem("user_id");
          setCategory({
            user_id,
          });
          console.log("userid", user_id);
  
          if (!token) {
            navigation.navigate("Login");
          }
          const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          };
          const response = await axios.post(
            "https://api.v2.kontenbase.com/query/api/v1/fda30547-2f96-4e2c-a3f6-8dd874ae9472/Categories",
            category,
            config
          );
          alert("Adding Category Succeeded");
          console.log(category);
        } catch (err) {
          console.log(err);
          alert("Adding Category Failed");
        }
      };

      const findUserCategories = async () => {
        try {
            const token = await AsyncStorage.getItem('token')
            const user_id = await AsyncStorage.getItem('user_id')
            // setCategory({
            //     user_id
            // })

            if (token === null) {
                props.navigation.navigate("Login")
            }

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token
                }
            }
            // const response = await API.get(`/UserCategories?user_id=${user_id}`, config)
            const response = await axios.get("https://api.v2.kontenbase.com/query/api/v1/fda30547-2f96-4e2c-a3f6-8dd874ae9472/Categories", config)

            setDataCategory(response.data)
        } catch (err) {
            console.log(err)
        }
    }


  
      React.useEffect(() => {
        findUserCategories()
      }, []);



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
                    name="name"
                    onChangeText={(value) => handleOnChange("name", value)}
                    value={category.name}
                    />

                    <TouchableOpacity title="Login" style={style.btn}
                        onPress={handleAddCategory}
                    >
                        <Text 
                        style={{fontSize:20, fontWeight:'bold', color:"#FFFFFF"}}
                         
                        >Add Category
                        </Text>
                    </TouchableOpacity>
            </VStack>
            
                <Text m={30}
                    style={style.Addlist}
                >List Category</Text>

                {/* <Center>
                    <HStack space={6} mt="6">
                    <Button size="sm" variant="subtle">
                        <Text>hallo</Text>
                    </Button>
                    </HStack>

                </Center> */}

                <ScrollView horizontal>
                    <FlatList flexDirection="row" numColumns={3} data={dataCategory} renderItem={(itemData) => {
                        return (
                            <Button borderRadius={5} w="100px" bg="orange.200" p={1} m={1}>
                                <Text bold color="#fff" textAlign="center">{itemData.item.name}</Text>
                            </Button>
                        )
                    }}
                        keyExtractor={(item, index) => {
                            return item.id;
                        }}
                    />
                </ScrollView>
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