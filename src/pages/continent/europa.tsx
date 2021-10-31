import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { ContinentBanner } from "../../components/Continent/ContinentBanner";
import { Info } from "../../components/Continent/Info";
import { CityCard } from "../../components/Continent/CityCard";

const EuropeCitiesData = [
  {
    name: "Londres",
    country: "Reino Unido",
    flagImageUrl:
      "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/grabretanha_R.gif",
    imageUrl:
      "https://images.unsplash.com/photo-1520986606214-8b456906c813?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Paris",
    country: "França",
    flagImageUrl:
      "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/franca_R.gif",
    imageUrl:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
  },
  {
    name: "Roma",
    country: "Itália",
    flagImageUrl:
      "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/italia_R.gif",
    imageUrl:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=796&q=80",
  },
  {
    name: "Praga",
    country: "República Tcheca",
    flagImageUrl:
      "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/checa_R.gif",
    imageUrl:
      "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Amsterdã",
    country: "Holanda",
    flagImageUrl:
      "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/holanda_R.gif",
    imageUrl:
      "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
  },
];

export default function Europe() {
  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner
        title="Europa"
        imageUrl="https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
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
        {EuropeCitiesData.map((city, index) => (
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
