import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { Stack } from "native-base";
import { Ionicons } from "@expo/vector-icons";

// screen
import ListTodo from "./src/screens/ListTodo";
import Home from "./src/screens/Home";
import Login from "./src/components/Auth/Login";
import Register from "./src/components/Auth/Register";
import AddList from "./src/screens/AddList";
import AddCategory from "./src/screens/AddCategory";
// import Detail from "./src/screens/Detail";



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTab(){
    return(
        <Tab.Navigator
            screenOptions={({route}) =>({
                headerShown: false,
                tabBarLabel:() =>{return null},
                tabBarIcon:({focused}) => {
                    let iconName;
                    if (route.name === "AddList"){
                        iconName = focused ? "caret-down" : "caret-down-outline"
                        return<Ionicons name={iconName} size={20} color="red"/>
                    } else if (route.name === "AddCategory"){
                        iconName = focused ? "document-text" : "document-text-outline"
                        return<Ionicons name={iconName} size={20} color="red"/>
                    } else if (route.name ==="ListTodo"){
                        iconName = focused ? "bookmarks" : "bookmarks-outline"
                        return<Ionicons name={iconName} size={20} color="red"/>
                      }
                }
            })
        }
        >
            <Stack.Screen name="ListTodo" component={ListTodo}/>
            <Stack.Screen name="AddCategory" component={AddCategory}/>
            <Stack.Screen name="AddList" component={AddList}/>
        </Tab.Navigator>
    )
}


export default function Container(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
            {/* <Stack.Screen name="Detail" component={Detail} options={{headerShown: false}} /> */}

            <Stack.Screen name="MyTab" component={MyTab} options={{ headerShown: false, headerTintColor:"white", headerMode:"screen"}}/>
            </Stack.Navigator>

        </NavigationContainer>
    )
}