// src/components/Game.tsx
import { useEffect, useState, useRef } from "react";
import { Badge, Box, Button, Typography } from "@mui/material";
import { useGame } from "../hooks/useGame";

const Game: React.FC = () => {
  const { gameStats, restartGame, isGameOver } = useGame({
    parentId: "game-container",
  });
  useEffect(() => {}, []);

  return (
    <div>
      <div
        id="game-container"
        className="relative max-h-[calc] transition-none"
        style={{ maxHeight: "calc(100vh - 120px)" }}
      ></div>
      {isGameOver && (
        <Box
          sx={(theme) => ({
            position: "fixed",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            zIndex: 1000,
            bgcolor: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          })}
        >
          <Typography variant="h3" color="white">
            <Badge title={`${gameStats.bananasSliced} level`} />
            Congratulations!
          </Typography>

          <Typography variant="body1" color="white">
            You sliced {gameStats.bananasSliced} bananas!
          </Typography>
          <Typography variant="body1" color="white">
            Your accuracy was {gameStats.accuracy.toFixed(2)}%
          </Typography>

          <Button
            onClick={() => {
              restartGame();
            }}
            sx={{
              bgcolor: "white",
            }}
            color="success"
          >
            Restart
          </Button>
        </Box>
      )}
    </div>
  );
};

export default Game;
