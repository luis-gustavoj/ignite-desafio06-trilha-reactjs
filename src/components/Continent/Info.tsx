import { SimpleGrid, Box, Text, HStack, Tooltip, Flex } from "@chakra-ui/react";

import { AiOutlineInfoCircle } from "react-icons/ai";

type InfoProps = {
  text: String;
  countries: number;
  languages: number;
  cities: number;
};

export const Info = ({ text, countries, languages, cities }: InfoProps) => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      maxWidth={1160}
      mx="auto"
      px={{ base: "4", md: "0" }}
    >
      <Box>
        <Text
          fontSize="16px"
          maxWidth={600}
          textAlign="justify"
          marginBottom={{ base: "4", md: "0" }}
        >
          {text}
        </Text>
      </Box>
      <HStack
        align="center"
        justify={{ base: "space-between", md: "center" }}
        spacing={{ base: "0", md: 42 }}
      >
        <Box textAlign={{ base: "left", md: "center" }}>
          <Text
            fontSize={{ base: "2rem", md: "3rem" }}
            width="100%"
            fontWeight="semibold"
            color="yellow.900"
          >
            {countries}
          </Text>
          <Text fontWeight="semibold">países</Text>
        </Box>
        <Box textAlign={{ base: "left", md: "center" }}>
          <Text
            fontSize={{ base: "2rem", md: "3rem" }}
            width="100%"
            fontWeight="semibold"
            color="yellow.900"
          >
            {languages}
          </Text>
          <Text fontWeight="semibold">línguas</Text>
        </Box>
        <Box textAlign={{ base: "left", md: "center" }}>
          <Text
            fontSize={{ base: "2rem", md: "3rem" }}
            width="100%"
            fontWeight="semibold"
            color="yellow.900"
          >
            {cities}
          </Text>

          <Flex align="center">
            <Text
              fontWeight="semibold"
              marginRight="4px"
              fontSize={{ base: "sm", md: "md" }}
            >
              cidades +100
            </Text>
            <Tooltip
              label="As cidades +100 são as cidades que este continente possui que estão entre as 100 cidades mais visitadas do mundo."
              fontSize="md"
            >
              <span>
                <AiOutlineInfoCircle color="#999999" />
              </span>
            </Tooltip>
          </Flex>
        </Box>
      </HStack>
    </SimpleGrid>
  );
};
