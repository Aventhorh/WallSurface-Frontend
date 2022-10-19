import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  shadows: ["none"],
  palette: {
    mode: "dark",
    primary: {
      main: "#ed4159",
    },
    secondary: {
      main: "#83839c",
    },
  },
  typography: {
    button: {
      textTransform: "none",
      fontWeight: 450,
    },
  },
});
