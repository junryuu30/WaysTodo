import React from "react";
import { NativeBaseProvider } from "native-base";
import ListTodo from "./src/screens/ListTodo";
import Container from "./Container";


export default function App() {
  return (
    <NativeBaseProvider>
      <Container/>
    </NativeBaseProvider>
  );
}


