// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  components: {
    Button: {
        variants: {
            outline: {
                _hover: {
                    bg: "#36393f" 

                }
            }
        }
    }
  },
  colors: {
    tailwindPink: {
      100: "#9d174d",
      200: "#ec4899",
      300: "#db2777",
      400: "#be185d",
      500: "#9d174d",
      600: "#831843",
      700:"#FFFFFF",
      800:"#FFFFFF",

    },
    customBlue: {
        500: "#0c8cbf",
        600: "#0c8cbf"
    },
    customGray: {
      600: "#4f545c",
      700: "#36393f",
      800: '#2f3136',
      900: "#202225"
    }
  },
})

