import React from "react";
import { 
    Tr,
    Td
} from "@chakra-ui/react";

export const User = ({ id, emri, mbiemri }) => {
    return <Tr>
        <Td>{id}</Td>
        <Td>{emri}</Td>
        <Td>{mbiemri}</Td>
    </Tr>
    
}

//export default User