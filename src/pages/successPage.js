import React from "react";
import { Container } from "../components/Container";
import { CheckIcon } from "@chakra-ui/icons";
import Navbar from "../components/NavBar";
import { Flex, Text, Button, Box } from "@chakra-ui/react";
import Link from "next/link";

function successPage() {
  return (
    <Container height="100vh">
      <Navbar />
      <Flex
        marginTop="5rem"
        d="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
      >
        <CheckIcon w={20} h={20} color="green.500" />
        <Box d="flex" flexDir="column" alignItems="center">
          <Text fontSize="4xl">Thank You</Text>
          <Text>Form has been successfully submitted</Text>
        </Box>
        <Link href="/">
          <Button marginTop="10px" colorScheme="teal">
            Back to Main Menu
          </Button>
        </Link>
      </Flex>
    </Container>
  );
}

export default successPage;
