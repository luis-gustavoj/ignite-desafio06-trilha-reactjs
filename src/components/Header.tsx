import { useRouter } from "next/router";

import { Flex, Icon, Box } from "@chakra-ui/react";
import { Logo } from "./Icons/Logo";

import { MdArrowBackIosNew } from "react-icons/md";

export const Header = () => {
  const router = useRouter();

  const { asPath } = router;

  const handleReturnPage = async () => {
    await router.push("/");
  };

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1160}
      align="center"
      justify="space-between"
      h={{ base: 50, lg: 100 }}
      mx="auto"
      px="4"
    >
      {asPath != "/" ? (
        <Icon
          as={MdArrowBackIosNew}
          fontSize="2xl"
          cursor="pointer"
          onClick={() => handleReturnPage()}
        />
      ) : (
        <Box visibility="hidden" />
      )}
      <Logo w={{ base: 92, lg: 184 }} h={{ base: 22.5, lg: 45 }} />
      <Box visibility="hidden" />
    </Flex>
  );
};
