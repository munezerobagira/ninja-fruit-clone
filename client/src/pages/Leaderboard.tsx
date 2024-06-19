// src/App.tsx
import React from "react";
import { CssBaseline, Container, Box, Typography } from "@mui/material";
import GameLeaderboard from "../components/GameLeaderboard";

const LeaderboardPage: React.FC = () => {
  const players = [
    { name: "Player 1", score: 150 },
    { name: "Player 2", score: 200 },
    { name: "Player 3", score: 100 },
    { name: "Player 4", score: 250 },
    { name: "Player 5", score: 50 },
  ];

  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Ninja Fruit Game
          </Typography>

          <GameLeaderboard players={players} />
        </Box>
      </Container>
    </div>
  );
};

export default LeaderboardPage;
