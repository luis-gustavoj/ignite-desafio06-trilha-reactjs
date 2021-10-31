import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { ContinentBanner } from "../../components/Continent/ContinentBanner";
import { Info } from "../../components/Continent/Info";
import { CityCard } from "../../components/Continent/CityCard";

const CitiesData = [
  {
    name: "Cairo",
    country: "Egito",
    flagImageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/255px-Flag_of_Egypt.svg.png",
    imageUrl:
      "https://images.unsplash.com/photo-1583426452197-db267897489e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80",
  },
];

export default function Africa() {
  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner
        title="África"
        imageUrl="https://images.unsplash.com/photo-1583426452197-db267897489e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80"
      />
      <Info
        cities={1}
        countries={14}
        languages={13}
        text="A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste"
      />

      <Heading
        maxWidth={1160}
        width="100%"
        px="4"
        mx="auto"
        marginTop={{ base: "12", md: "20" }}
        fontWeight={{ base: "normal", md: "bold" }}
      >
        Cidades + 100
      </Heading>

      <SimpleGrid
        maxWidth={1160}
        width="100%"
        mx="auto"
        columns={{ base: 1, md: 4 }}
        minChildWidth="256px"
        marginTop="10"
        marginBottom="10"
        spacingY="10"
      >
        {CitiesData.map((city, index) => (
          <CityCard
            key={index}
            name={city.name}
            country={city.country}
            imageUrl={city.imageUrl}
            flagImageUrl={city.flagImageUrl}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
