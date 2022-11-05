import React, { useState } from "react"
import { Box, Text, FormControl, Select, Center, Input, TextArea, Button, VStack
} from "native-base"
import { StyleSheet, TouchableOpacity } from "react-native"

import DatePict from "../components/datePict"

const AddList = () => {

    const [showModal, setShowModal] = useState(false);
    const [date, setDate] = useState()


    return(
        <>
        <Center>
            <Box>
                <Text 
                m={30}
                style={style.Addlist}
                mb={5}
                >Add List</Text>
                
                <VStack space={2} alignItems="center">
                    <Input size="md" 
                    placeholder="Name" 
                    width={270} 
                    mb={2}
                    />
                    <FormControl w="3/4" width={270}>
                        <Select
                        // selectedValue={service}

                        minWidth="200"
                        accessibilityLabel="Category"
                        placeholder="Category"
                        _selectedItem={{
                        bg: "teal.600",
                        }}
                        mb={2}
                        // onValueChange={(itemValue) => setService(itemValue)}
                        >
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item label="Cross Platform Development" value="cross" />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item label="Backend Development" value="backend" />
                        </Select>
                    </FormControl>

                    {/* for select date */}
                    <Button 
                    variant="outline" 
                    w="270"
                    mb={2}
                    // py={4}  
                    onPress={() => setShowModal(true)}>
                        <Text color="gray.400" iconName="document-text"
                        style={{textAlign:"left"}}
                        >
                        {date ? date.toDateString() : "Select date..."}
                        </Text>
                    </Button>
                    <DatePict
                        showModal={showModal}
                        setShowModal={setShowModal}
                        date={date}
                        setDate={setDate}
                    />

                    <TextArea 
                    placeholder="Description" 
                    w="270"
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
            </Box>

                

            </Center>
        </>
    )
}

const style = StyleSheet.create({
    Addlist:{
        textAlign:"left",
        marginLeft: 5,
        fontSize: 35,
        fontWeight: "bold",
        marginVertical: 20

    },
    btn: {
        backgroundColor: '#FF5555',
        width: 270,
        height: 40,
        marginHorizontal:20,
        marginTop:30,
        display:"flex",
        justifyContent:"center",
        alignItems:'center',
        borderRadius:5,
    },
})

export default AddList