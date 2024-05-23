import Header2 from "./components/header/Header2.jsx";
import Header1 from "./components/header/Header1.jsx";
import Header3 from "./components/header/Header3.jsx";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme.js";
import Hero from "./components/hero/Hero.jsx";
import Main from "./components/mainContent/main.jsx";
import Footer from "./components/footer/footer.jsx";
import ScrollToTop from "./components/scroll/ScrollToTop.jsx";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />

        <Header1 />
        <Header2 />
        <Header3 />

        <Box
          bgcolor={
            // @ts-ignore
            theme.palette.bg.main
          }
        >
          <Hero />
          <Main />
        </Box>

        <Footer />


        <ScrollToTop />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
