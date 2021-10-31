import { ElementType } from "react";

import { Flex, Icon, Text, useBreakpointValue } from "@chakra-ui/react";

import { GoPrimitiveDot } from "react-icons/go";

type MenuItemProps = {
  title: string;
  icon: ElementType;
};

export const MenuItem = ({ icon, title }: MenuItemProps) => {
  const isWideVersion = useBreakpointValue({ base: false, md: true });

  return (
    <Flex
      h="100%"
      direction={{ base: "row", md: "column" }}
      justify="center"
      align="center"
      mx="auto"
      maxWidth={{ base: "auto", md: "120px" }}
      width={{ base: "auto", md: "100%" }}
    >
      {isWideVersion ? (
        <Icon as={icon} fontSize="7xl" color="yellow.900" />
      ) : (
        <Icon as={GoPrimitiveDot} fontSize="md" color="yellow.900" />
      )}
      <Text fontWeight="semibold" fontSize="md" mt={{ md: "4" }}>
        {title}
      </Text>
    </Flex>
  );
};
