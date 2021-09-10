import { darken,mode, whiten } from '@chakra-ui/theme-tools';

export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {
    fontWeight: "bold",
    color: "white",
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    xl: {
      width:"70px",
      padding:"10px",
    },
    sm:{
      width:"100px",
      padding:"12px",
    }
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: (props)=> ({
      bg:"#C53030",
      color:"white",
      _hover: {
        bg: "#E53E3E",
        boxShadow:"md",
      },
    }),
  },
  defaultProps: {},
}