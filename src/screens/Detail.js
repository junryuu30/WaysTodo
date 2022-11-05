import React from "react";
import {
  ScrollView,
  Box,
  VStack,
  Divider,
  Text,
  HStack,
  Image,
} from "native-base";
import checked from "../../assets/checked.png"
import { Pressable } from "react-native";

const Detail = ({navigation}) => {
  // const item = route.params.item;
//   console.log("oke item", route);
    const handleList=()=>{
      navigation.navigate("ListTodo");
    }


  return (
    <ScrollView padding={5}>

        <Pressable
          onPress={handleList}>
          <Text>Back to My List</Text>
        </Pressable>
      

      <Box backgroundColor="#DAEFFF" borderRadius="5" mt={10} mb={10}>
        <VStack space="4" divider={<Divider />}>
          <HStack px="4" pt="4">
            <Text fontSize="30px" w="64">
            </Text>
            <Box>
              <Box backgroundColor="red.300" borderRadius={5} marginRight="5">
                <Text
                  fontSize="15px"
                  bold
                  color="white"
                  w={12}
                  textAlign="center"
                >
                  Title
                </Text>
              </Box>
              <Image
                mt={2}
                source={checked}
                resizeMode="contain"
                alignItems="center"
              />
            </Box>
          </HStack>
          <Box px="4">
           <Text>
              Get Started with the Basics
              The best way to learn any programming language is by starting with the basics. Golang is no exception. You can find a variety of introductory tutorials online that will teach you the basics of the language.

              Use a Golang Tutorial
              Tutorials are a great way to learn a new programming language. They typically include step-by-step instructions that will guide you through the basics of the language. There are a variety of Golang tutorials available online, and you can find a few good ones here:

              Use a Golang Reference Guide
              A reference guide is a great tool for learning a programming language. It provides a comprehensive overview of the language, including its syntax, features, and usage. You can find a variety of Golang reference guides online, and a few good ones are listed here:

              Join a Golang Forum or Community
              Joining a Golang forum or community is a great way to get help and learn from others who are also learning the language. There are a number of forums and communities available online, and a few of the better ones are listed below:

              Use a Golang IDE
              An IDE, or Integrated Development Environment, is a software development tool that provides everything you need to write, compile, and debug your code. There are a number of Golang IDEs available, and a few of the better ones are listed below:

              Use a Golang Compiler
              A compiler is a software program that translates code written in one programming language into another programming language. There are a number of Golang compilers available, and a few of the better ones are listed below:
          </Text>
          </Box>
          <Box px="4" pb="4">
            GeekyAnts
          </Box>
        </VStack>
      </Box>
    </ScrollView>
  );
};

export default Detail
