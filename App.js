import React from "react";
import { NativeBaseProvider } from "native-base";
// import AddList from "./src/screens/AddList";
// import ListTodo from "./src/screens/ListTodo";
// import AddCategory from "./src/screens/AddCategory";
// import Home from "./src/screens/Home";
// import Login from "./src/components/Auth/Login";
// import Register from "./src/components/Auth/Register";
import Container from "./Container";
// import TodoList from "./src/screens/TodoList";
// import Detail from "./src/screens/Detail";



export default function App() {
  return (
    <NativeBaseProvider>
      {/* <Home/> */}
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <AddCategory/> */}
      {/* <AddList/> */}
      {/* <ListTodo/> */}
      
      {/* <TodoList/> */}
      <Container/>
      {/* <Detail/> */}

    </NativeBaseProvider>
  );
}


