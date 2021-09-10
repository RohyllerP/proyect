import { mode }from "@chakra-ui/theme-tools";
export const styles = {
   global: (props) => ({
      body: {
        padding: 0,
        margin: 0,
        boxSizing: "borderBox",
        fontFamily: 'Noto Sans SC',
        bg: mode("#CBD5E0","gray.800")(props),
      },
      a: {
        fontSize: "1.3em",
        color: "inherit",
        textDecoration: "none",
        cursor: "pointer",
        transition: "all 0.3s ease",
        _hover: {
          color: "#171923",
        },
      },
      i: {
        fontSize: "27px",
      },
   }),
}
