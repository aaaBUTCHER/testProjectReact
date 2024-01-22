import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
  Box,
  Input,
  Button
} from "@chakra-ui/react";

export const UsersTable = () => {
    const [id, setId] = useState('')
    const [emri, setEmri] = useState('')
    const [mbiemri, setMbiemri] = useState('')
    const [lista, setLista] = useState([
        { id: 0, emri: 'placeholder', mbiemri : 'placeholder'},
    ])

    const funksionShto = () => {
        setLista(prev => [
            ...prev,
            { id: id, emri: emri, mbiemri: mbiemri},
        ])
    }

    return (
        <Flex>
            <Box>
                <Input 
                    placeholder='shenoId'
                    onChange={event => setId(event.target.value)}/>
                <Input 
                    placeholder='shenoEmrin'
                    onChange={event => setEmri(event.target.value)}/>
                <Input 
                    placeholder='shenoMbiemrin'
                    onChange={event => setMbiemri(event.target.value)}/>
                <Button onClick={funksionShto}>Shto ne tabel</Button>
            </Box>
            
            <TableContainer width="full">
                <Table variant="simple">
                    <TableCaption>Tabela e Userave</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Id</Th>
                            <Th>Emri</Th>
                            <Th>Mbiemri</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                            {lista.map(item => {
                                return (
                                    <Tr Tr key={item.id}>
                                        <Td>{item.id}</Td>
                                        <Td>{item.emri}</Td>
                                        <Td>{item.mbiemri}</Td>
                                    </Tr>
                                )
                            })}
                       
                    </Tbody>
                </Table>
            </TableContainer>
        </Flex>
    )
};
