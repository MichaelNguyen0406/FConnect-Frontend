import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#FF6738", // Cam
        },
        secondary: {
          main: "#10E3FF", // Màu phụ cho light mode
        },
        tertiary: {
          main: "#0FFF83",
        },
        background: {
          default: "#F8F9FA", // Màu nền cho light mode
          paper: "#fff",
        },
        text: {
          primary: "#2D3748",
          secondary: "#A0AEC0",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#C72E00", // Màu chính cho dark mode
        },
        secondary: {
          main: "#00D4F0", // Màu phụ cho dark mode
        },
        tertiary: {
          main: "#0FFF83",
        },
        background: {
          default: "#1c1c1d", // Màu nền cho dark mode
          paper: "#1e1e1e",
        },
        text: {
          primary: "#ffffff",
          secondary: "#aaaaaa",
        },
      },
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

// eslint-disable-next-line react/prop-types
export default function ThemeContext({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
