import React, { useState} from "react";
import { UsersTable } from "./components/Users";
import {
  Flex,
  Box,
  Button,
  Heading
} from "@chakra-ui/react";

const App = () => {

  return (
    <Box display="flex" margin="0 auto">
      <Flex>
          <UsersTable/>
      </Flex>
    </Box>
  )
}

export default App;
