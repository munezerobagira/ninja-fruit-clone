import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import MenuAppBar from "./components/MenuAppBar";
import BottomNavigator from "./components/BottomNavigator";
import { CircularProgress, Stack } from "@mui/material";
import { WebAppProvider } from "@vkruglikov/react-telegram-web-app";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <WebAppProvider>
          <RouterProvider
            router={router}
            fallbackElement={
              <>
                <CircularProgress />
              </>
            }
          ></RouterProvider>
        </WebAppProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
