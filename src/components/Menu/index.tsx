import { Flex, SimpleGrid } from "@chakra-ui/layout";
import { MenuItem } from "./MenuItem";

import { FaCocktail, FaRegBuilding } from "react-icons/fa";
import { GiSurfBoard, GiGreekTemple } from "react-icons/gi";
import { ImEarth } from "react-icons/im";

export const Menu = () => {
  return (
    <Flex
      maxWidth={1160}
      width="100%"
      mx="auto"
      flexWrap="wrap"
      h={{ base: "auto", md: 145 }}
      justify="space-evenly"
      px="4"
    >
      <MenuItem title="vida noturna" icon={FaCocktail} />
      <MenuItem title="praia" icon={GiSurfBoard} />
      <MenuItem title="moderno" icon={FaRegBuilding} />
      <MenuItem title="clássico" icon={GiGreekTemple} />
      <MenuItem title="e mais..." icon={ImEarth} />
    </Flex>
  );
};
