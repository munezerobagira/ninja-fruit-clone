import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MailIcon from "@mui/icons-material/Mail";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import ProfileIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

const navigations = [
  {
    label: "Mail",
    icon: <MailIcon />,
    path: "/mail",
  },
  {
    label: "Stars",
    icon: <FavoriteIcon />,
    path: "stats",
  },
  {
    label: "Home",
    icon: <HomeIcon />,
    path: "/",
  },
  {
    label: "Leaderboard",
    icon: <LeaderboardIcon />,
    path: "/leaderboard",
  },
  {
    label: "Profile",
    icon: <ProfileIcon />,
    path: "/profile",
  },
];

export default function BottomNavigator() {
  const [value, setValue] = React.useState(0);

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {navigations.map((nav, index) => (
          <BottomNavigationAction
            key={index}
            component={Link}
            to={nav.path}
            label={nav.label}
            icon={nav.icon}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}
