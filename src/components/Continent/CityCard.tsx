import { Box, Image, Flex, Text } from "@chakra-ui/react";

type CityCardProps = {
  name: string;
  imageUrl: string;
  flagImageUrl: string;
  country: string;
};

export const CityCard = ({
  name,
  imageUrl,
  flagImageUrl,
  country,
}: CityCardProps) => {
  return (
    <Box maxWidth={256} width="100%" mx={{ base: "auto", md: 0 }}>
      <Image
        alt={name}
        src={imageUrl}
        height="173px"
        width="100%"
        objectFit="cover"
        borderTopRadius="4px"
      />
      <Flex
        padding="24px"
        align="center"
        justify="space-between"
        borderBottomRadius="4px"
        borderX="1px"
        borderBottom="1px"
        borderColor="yellow.400"
      >
        <Box>
          <Text marginBottom="12px" fontWeight="semibold">
            {name}
          </Text>
          <Text color="gray.300">{country}</Text>
        </Box>
        <Image
          border="none"
          src={flagImageUrl}
          boxSize="30px"
          objectFit="cover"
          borderRadius="full"
          alt={`Bandeira do(a) ${country}`}
        />
      </Flex>
    </Box>
  );
};
