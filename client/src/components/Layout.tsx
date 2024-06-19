import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import MenuAppBar from "./MenuAppBar";
import BottomNavigator from "./BottomNavigator";

function Layout() {
  return (
    <>
      <Stack direction="column">
        <MenuAppBar />
        <div style={{ minHeight: "calc(100vh - 120px)" }}>
          <Outlet />
        </div>
        <BottomNavigator />
      </Stack>
    </>
  );
}

export default Layout;
