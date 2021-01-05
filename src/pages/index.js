import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Button, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";
import NavBar from "../components/NavBar";

const Index = () => {
  return (
    <Container height="100vh">
      <DarkModeSwitch />
      <NavBar />
      <Text fontSize="m" marginTop="5rem">
        Lets Work Together to keep Greatech Covid-19 Free !
      </Text>

      <Flex marginTop="1rem">
        <Link href="/vendors">
          <Button colorScheme="blue" marginRight="2rem">
            Vendors
          </Button>
        </Link>
        <Link href="/employee">
          <Button colorScheme="blue">Employee</Button>
        </Link>
      </Flex>
    </Container>
  );
};

export default Index;
