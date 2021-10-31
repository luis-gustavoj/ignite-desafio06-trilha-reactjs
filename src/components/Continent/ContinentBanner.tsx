import { Flex, Box, Heading } from "@chakra-ui/react";

type ContinentBannerProps = {
  imageUrl: string;
  title: string;
};

export const ContinentBanner = ({ imageUrl, title }: ContinentBannerProps) => {
  return (
    <Flex
      w="100%"
      height={{ base: "150px", md: "500px" }}
      bgImage={`url('${imageUrl}')`}
      bgSize="cover"
      direction="column"
      align="center"
      position="relative"
      mb={{ base: "55px", md: "110px" }}
    >
      <Flex
        width="100%"
        height="100%"
        align="center"
        justify="center"
        direction="column"
        background="blackAlpha.400"
      >
        <Flex
          width="100%"
          maxWidth={1160}
          justify={{ base: "center", md: "space-between" }}
          position={{ base: "inherit", md: "absolute" }}
          bottom="20"
          px="4"
        >
          <Box mr={{ base: "0", md: "auto" }}>
            <Heading color="white" fontWeight="semibold" fontSize="3xl">
              {title}
            </Heading>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
