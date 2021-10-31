import { Flex, Box, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import { AirplaneIcon } from "./Icons/Airplane";

export const Banner = () => {
  const isWideVersion = useBreakpointValue({ base: false, md: true });

  return (
    <Flex
      w="100%"
      height={{ base: 163, md: 335 }}
      bgImage="url('/bannerbg.png')"
      bgSize="cover"
      direction="column"
      align="center"
      justify="center"
      position="relative"
      mb={{ base: "36px", md: "110px" }}
    >
      <Flex
        width="100%"
        maxWidth={1160}
        direction="row"
        justify="space-between"
        position={{ base: "inherit", md: "absolute" }}
        bottom={{ base: 0, md: -10 }}
        px="4"
      >
        <Box mr="auto">
          <Heading
            color="white"
            fontWeight="normal"
            fontSize={{ base: "md", md: "3xl" }}
          >
            5 Continentes,
            <br /> infinitas possibilidades
          </Heading>
          <Text color="gray.100" mt="2.5" fontSize={{ base: "sm", md: "md" }}>
            Chegou a hora de tirar do papel a viagem que você
            <br /> sempre sonhou.
          </Text>
        </Box>
        {isWideVersion && <AirplaneIcon w={417} h={270} />}
      </Flex>
    </Flex>
  );
};
