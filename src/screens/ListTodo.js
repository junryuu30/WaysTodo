import * as React from 'react'
import { 
    ScrollView,
    Text,
    HStack,
    Box,
    Image,
    Select,
    CheckIcon,
    VStack,
    Center,
    Button,
} from "native-base"

import fotoProfile from "../../assets/fotoProfile.png"
import checked from "../../assets/checked.png"
import { Pressable } from "react-native"
// import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
// import { Ionicons } from '@expo/vector-icons'

import DatePict from '../components/datePict'


const ListTodo = ({navigation}) => {

    const [showModal, setShowModal] = React.useState(false);
    const [date, setDate] = React.useState()


    const handleDetail=()=>{
        navigation.navigate("Detail")
    }


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
                    {/* <Input
                    size="md"
                    placeholder="Chose date"
                    paddingRight={3}
                    mt={2}
                    marginRight={2}
                    width={24}
                    // onPress={() => showMode('date')}
                    /> */}

                    <Button
                        variant="outline"
                        onPress={() => setShowModal(true)}
                        iconName="document-text"
                        paddingRight={3}
                        mt={2}
                        marginRight={2}
                        width={24}
                        >
                        <Text color="gray.400">
                            {date ? date.toDateString() : "Select date..."}
                        </Text>
                    </Button>

                    <DatePict
                        showModal={showModal}
                        setShowModal={setShowModal}
                        date={date}
                        setDate={setDate}
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

                {/* <Pressable 
                p={1} 
                title='DatePicker' 
                onPress={() => showMode('date')} 
                bg="blueGray.200" borderRadius={8} borderWidth={2} borderColor="blueGray.400" mb="3" w="120px">
                    <HStack justifyContent="space-between">
                            <Text fontSize="xs" color="blueGray.400">{text}</Text>
                            <Text color="blueGray.400"><Ionicons name="calendar-outline" /></Text>
                </HStack></Pressable> */}




                <ScrollView>
                {/* {List.map((item) => { */}
                    <Box mt={12}>
                        <Pressable
                            onPress={handleDetail}
                        >
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
                                                source={checked}
                                                resizeMode="contain"
                                                alignItems="center"
                                                style={{ width: 40, height: 40, }}
                                            />
                                        </Box>
                                    </HStack>


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
                                                // source={{ uri: "checked" }}
                                                source={checked}
                                                resizeMode="contain"
                                                alignItems="center"
                                                style={{ width: 40, height: 40, }}
                                            />
                                        </Box>
                                    </HStack>

                            </VStack>
                        </Pressable>
                        
                    </Box>


                    </ScrollView>
                </Center>

            </ScrollView>


        </>
    )
}


export default ListTodo
