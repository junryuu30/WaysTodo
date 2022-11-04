import React, { useState } from "react"
import { 
    ScrollView,
    Text,
    HStack,
    Box,
    Image,
    Input,
    Select,
    CheckIcon,
    VStack,
    Center
} from "native-base"
import fotoProfile from "../../assets/fotoProfile.png"
// import Tanggal from "../components/datePict"

const check = "https://res.cloudinary.com/dzayqrrm6/image/upload/v1667482736/icon__Check_Circle__zk0lh7.png"


const ListTodo = ({navigation}) => {
    const [showModal, setShowModal] = useState(false);
    const [date, setDate] = useState();


    return(
        <>
            <ScrollView w="full" mt="10" padding="5">
                <Center>
                    <HStack marginBottom={10}>
                        <Box>
                            <Text bold fontSize="xl" w="64">
                            Hi Jihan
                            </Text>
                            <Text color="red.400">3000 List</Text>
                        </Box>
                        <Image source={fotoProfile} resizeMode="contain" alt="Alternate Text" size="50" />
                    </HStack>



                <HStack alignItems={"center"}>
                    <Input
                    size="md"
                    placeholder="Chose date"
                    paddingRight={3}
                    mt={2}
                    marginRight={2}
                    width={24}
                    />
                    <Select
                    width={24}
                    accessibilityLabel="Category"
                    placeholder="Category"
                    _selectedItem={{bg: "teal.600", endIcon: <CheckIcon size="5"/>,}}
                    mt={1}
                    marginRight={2}
                    >
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item label="Cross Platform Development" value="cross"/>  
                    </Select>
                    <Select
                    width={24}
                    accessibilityLabel="Category"
                    placeholder="Category"
                    _selectedItem={{bg: "teal.600", endIcon: <CheckIcon size="5"/>,}}
                    mt={1}
                    marginRight={2}
                    >
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item label="Cross Platform Development" value="cross"/>  
                    </Select>

                </HStack>

                <ScrollView>
                    <Box mt={12}>
                        <VStack>
                                    <HStack
                                        mb={6}
                                        backgroundColor="blue.100"
                                        borderRadius={5}
                                        padding="3"
                                        justifyContent={"space-between"}
                                    >
                                        <Box>
                                            <Text bold fontSize="xs" w="64">
                                                category - name
                                            </Text>
                                            <Text fontSize="2xs" 
                                            w="64"
                                            mt="5">
                                                Learn Golang to improve fundamentals and familiarize with
                                                coding.
                                            </Text>
                                            <Text fontSize="2xs" w="64" mt={3}>
                                                Date
                                            </Text>
                                        </Box>
                                        <Box >
                                            <Box
                                                backgroundColor="red.300"
                                                borderRadius={5}
                                                marginRight="5"
                                                alignItems={"flex-end"}
                                            >
                                                <Text
                                                    fontSize="10px"
                                                    color="black"
                                                    w={12}
                                                    textAlign="center"
                                                >
                                                    {/* {item.category} */}
                                                    category
                                                </Text>
                                            </Box >
                                            <Image
                                                mt={2}
                                                source={{ uri: "https://res.cloudinary.com/dzayqrrm6/image/upload/v1667482736/icon__Check_Circle__zk0lh7.png" }}
                                                resizeMode="contain"
                                                alignItems="center"
                                                alt={check}
                                                style={{ width: 40, height: 40, }}
                                            />
                                        </Box>
                                    </HStack>
                                {/* );
                            })} */}
                        </VStack>
                    </Box>
                    </ScrollView>




                </Center>

                

            </ScrollView>


        </>
    )
}


// const styleListTodo = StyleSheet.create({
//     container1:{
//         display: flex,
//         justifyContent: spaceBetween,
//     },
// })


export default ListTodo
