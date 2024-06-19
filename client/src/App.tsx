import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import MenuAppBar from "./components/MenuAppBar";
import BottomNavigator from "./components/BottomNavigator";
import { CircularProgress, Stack } from "@mui/material";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider
          router={router}
          fallbackElement={
            <>
              <CircularProgress />
            </>
          }
        ></RouterProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
