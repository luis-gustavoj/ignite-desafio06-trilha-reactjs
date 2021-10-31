import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { ContinentBanner } from "../../components/Continent/ContinentBanner";
import { Info } from "../../components/Continent/Info";
import { CityCard } from "../../components/Continent/CityCard";

const CitiesData = [
  {
    name: "Hong Kong",
    country: "China",
    flagImageUrl:
      "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/china_R.gif",
    imageUrl:
      "https://images.unsplash.com/photo-1553560015-3cad96043542?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Paris",
    country: "Tailândia",
    flagImageUrl:
      "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/tailandia_R.gif",
    imageUrl:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
];

export default function Asia() {
  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner
        title="Ásia"
        imageUrl="https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      />
      <Info
        cities={33}
        countries={22}
        languages={11}
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
