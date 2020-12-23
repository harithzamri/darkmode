import { Flex, useColorMode } from "@chakra-ui/react";

export const Container = (props) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.900", dark: "gray.50" };

  const color = { light: "white", dark: "black" };
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  );
};
