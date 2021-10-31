import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "100": "#DADADA",
      "300": "#999999",
      "500": "#47585B",
    },
    yellow: {
      "900": "#FFBA08",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "gray.500",
      },
    },
  },
});
