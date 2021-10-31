import type { NextPage } from "next";

import { Flex, Box, Heading } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { Menu } from "../components/Menu";
import { Slider } from "../components/Slider";

const Home: NextPage = () => {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Menu />
      <Box
        width="90px"
        mx="auto"
        mt={{ base: "36px", md: "64px" }}
        height="2px"
        bgColor="gray.500"
        mb={{ base: "24px", md: "32px" }}
      />
      <Flex color="gray.500" mx="auto" textAlign="center">
        <Heading
          fontWeight="normal"
          fontSize={{ base: "lg", md: "36" }}
          lineHeight={{ base: "27px", md: "54px" }}
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Heading>
      </Flex>
      <Box
        maxWidth={1160}
        width="100%"
        h={{ base: "250px", md: "450px" }}
        mx="auto"
        my="8"
      >
        <Slider />
      </Box>
    </Flex>
  );
};

export default Home;
