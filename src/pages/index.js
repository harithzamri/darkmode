import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Button, Text, Flex, Image, useColorMode } from "@chakra-ui/react";
import Link from "next/link";

const Index = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Container height="100vh">
      <DarkModeSwitch />
      {isDark ? (
        <Image
          marginTop="5rem"
          src="https://greatech-group.com/images/logo-greatech-color.png"
          filter="brightness(1.5)"
          alt="greatech bright mode"
          width="180px"
        />
      ) : (
        <Image
          marginTop="5rem"
          src="https://greatech-group.com/images/logo-greatech.png"
          alt="greatech dark mode"
          width="180px"
        />
      )}
      <Text fontSize="m" marginTop="5rem">
        Lets Work Together to keep Greatech Covid-19 Free !
      </Text>
      <Flex marginTop="1rem">
        <Button colorScheme="blue" marginRight="2rem">
          Vendors
        </Button>
        <Link href="/employee">
          <Button colorScheme="blue">Employee</Button>
        </Link>
      </Flex>
    </Container>
  );
};

export default Index;
