import React from "react";
import { Stack, Input} from "native-base";


const InputComponent=({ ...ph })=>{
    return(
        <>
           <Stack>
                <Input
                    width={320}
                    style={{color:"#B82020"}}
                    marginBottom={4}
                    size="md"
                    {...ph}
                />
            </Stack> 
        </>
    );
};

export default InputComponent