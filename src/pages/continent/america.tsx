import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { ContinentBanner } from "../../components/Continent/ContinentBanner";
import { Info } from "../../components/Continent/Info";
import { CityCard } from "../../components/Continent/CityCard";

const CitiesData = [
  {
    name: "New York",
    country: "Estados Unidos",
    flagImageUrl:
      "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/usa_R.gif",
    imageUrl:
      "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80",
  },
  {
    name: "Rio de Janeiro",
    country: "Brasil",
    flagImageUrl:
      "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/brasil_R.gif",
    imageUrl:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
  },
];

export default function America() {
  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner
        title="América"
        imageUrl="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
      />
      <Info
        cities={27}
        countries={50}
        languages={60}
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
