import Link from "next/link";

import { Flex, Heading, Text } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export const Slider = () => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      className="mySwiper"
    >
      <SwiperSlide>
        <Link href="/continent/europa" passHref>
          <Flex
            bgImage="url('/europe.png')"
            bgSize="cover"
            width="100%"
            height="100%"
            cursor="pointer"
          >
            <Flex
              width="100%"
              height="100%"
              align="center"
              justify="center"
              direction="column"
              background="blackAlpha.400"
            >
              <Heading
                lineHeight="67px"
                fontWeight="bold"
                fontSize={{ base: "3xl", md: "4xl" }}
                color="white"
              >
                Europa
              </Heading>
              <Text
                lineHeight="33px"
                fontWeight="bold"
                fontSize={{ base: "xl", md: "2xl" }}
                color="gray.100"
              >
                O continente mais antigo.
              </Text>
            </Flex>
          </Flex>
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Link href="/continent/asia" passHref>
          <Flex
            bgImage="url('/asia.jpg')"
            bgSize="cover"
            width="100%"
            height="100%"
            cursor="pointer"
          >
            <Flex
              width="100%"
              height="100%"
              align="center"
              justify="center"
              direction="column"
              background="blackAlpha.400"
            >
              <Heading
                lineHeight="67px"
                fontWeight="bold"
                fontSize={{ base: "3xl", md: "4xl" }}
                color="white"
              >
                Ásia
              </Heading>
              <Text
                lineHeight="33px"
                fontWeight="bold"
                fontSize={{ base: "xl", md: "2xl" }}
                color="gray.100"
              >
                O continente mais populoso
              </Text>
            </Flex>
          </Flex>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="continent/africa" passHref>
          <Flex
            bgImage="url('/africa.jpg')"
            bgSize="cover"
            width="100%"
            height="100%"
            cursor="pointer"
          >
            <Flex
              width="100%"
              height="100%"
              align="center"
              justify="center"
              direction="column"
              background="blackAlpha.400"
            >
              <Heading
                lineHeight="67px"
                fontWeight="bold"
                fontSize={{ base: "3xl", md: "4xl" }}
                color="white"
              >
                África
              </Heading>
              <Text
                lineHeight="33px"
                fontWeight="bold"
                fontSize={{ base: "xl", md: "2xl" }}
                color="gray.100"
              >
                O continent mais quente
              </Text>
            </Flex>
          </Flex>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="continent/america" passHref>
          <Flex
            bgImage="url('/america.jpg')"
            bgSize="cover"
            width="100%"
            height="100%"
            cursor="pointer"
          >
            <Flex
              width="100%"
              height="100%"
              align="center"
              justify="center"
              direction="column"
              background="blackAlpha.400"
            >
              <Heading
                lineHeight="67px"
                fontWeight="bold"
                fontSize={{ base: "3xl", md: "4xl" }}
                color="white"
              >
                América
              </Heading>
              <Text
                lineHeight="33px"
                fontWeight="bold"
                fontSize={{ base: "xl", md: "2xl" }}
                color="gray.100"
              >
                O continente mais dividido
              </Text>
            </Flex>
          </Flex>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="continent/oceania" passHref>
          <Flex
            bgImage="url('/oceania.jpg')"
            bgSize="cover"
            width="100%"
            height="100%"
            cursor="pointer"
          >
            <Flex
              width="100%"
              height="100%"
              align="center"
              justify="center"
              direction="column"
              background="blackAlpha.400"
            >
              <Heading
                lineHeight="67px"
                fontWeight="bold"
                fontSize={{ base: "3xl", md: "4xl" }}
                color="white"
              >
                Oceania
              </Heading>
              <Text
                lineHeight="33px"
                fontWeight="bold"
                fontSize={{ base: "xl", md: "2xl" }}
                color="gray.100"
              >
                O continente mais molhado
              </Text>
            </Flex>
          </Flex>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};
