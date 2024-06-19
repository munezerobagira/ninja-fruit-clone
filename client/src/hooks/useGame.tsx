import { useCallback, useEffect, useRef, useState } from "react";
import Phaser from "phaser";

export const useGame = ({ parentId }: { parentId: string }) => {
  const [isGameOver, setIsGameOver] = useState(false);
  const [level, setLevel] = useState(1);
  const [gameStats, setGameStats] = useState({
    bananasSliced: 0,
    accuracy: 0,
    remainingChildrens: 0,
  });
  const gameRef = useRef<Phaser.Game | null>(null);
  const gameConfig = useRef<Phaser.Types.Core.GameConfig | null>(null);
  let bananasSliced = 0;
  let totalClicks = 0;

  const restartGame = useCallback(() => {
    setLevel((prev) => prev + 1);
    if (gameRef.current) {
      gameRef.current.destroy(true);
      gameRef.current = null;
      gameConfig.current = null;
    }
    setIsGameOver(false);
  }, []);

  const createGame = useCallback(() => {
    const game = new Phaser.Game(gameConfig.current!);
    return game;
  }, []);

  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      scale: {
        mode: Phaser.Scale.MAX_ZOOM,
        autoCenter: Phaser.Scale.MAX_ZOOM,
        width: window.innerWidth,
        height: window.innerHeight,
      },
      fps: {
        target: 60,
      },
      parent: parentId,
      backgroundColor: "white",
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 100, x: 0 },
          debug: false,
        },
      },
      scene: {
        preload,
        create,
        update,
      },
    };
    if (!gameConfig.current) gameConfig.current = config;

    if (gameRef.current == null) gameRef.current = createGame();

    function preload(this: Phaser.Scene) {
      this.load.image("fruit", "/banana.png");
      this.load.image("red", "https://labs.phaser.io/assets/particles/red.png");
    }

    function create(this: Phaser.Scene) {
      this.lights.enable().setAmbientColor(0x404040);
      const particles = this.add.particles(0, 0, "red", {
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: "ADD",
      });

      this.input.on("pointerdown", (context: Phaser.Input.Pointer) => {
        totalClicks += 1;
        particles.start();
        particles.startFollow(context);
      });

      this.input.on("pointerup", (context: Phaser.Input.Pointer) => {
        particles.stop();
      });

      const bananaGroup = this.physics.add.group();
      for (let i = 0; i < level; i++) {
        const x = Phaser.Math.Between(50, window.innerWidth - 50);
        const y = Phaser.Math.Between(50, window.innerHeight - 50);
        const banana: Phaser.Physics.Arcade.Sprite = bananaGroup.create(
          x,
          y,
          "fruit"
        );
        banana.setVelocity(100, 200);
        banana.setBounce(1, 1);
        banana.setCollideWorldBounds(true);
        banana.setInteractive();

        banana.on("pointerover", (context: Phaser.Input.Pointer) => {
          if (context.isDown) {
            banana.destroy();
            bananasSliced += 1;
            if (bananaGroup.getChildren().length === 0) {
              const accuracy = (bananasSliced / totalClicks) * 100;
              setGameStats({
                bananasSliced,
                accuracy,
                remainingChildrens: bananaGroup.getChildren().length,
              });
              setIsGameOver(true);
            }
          }
        });
      }
    }

    function update(this: Phaser.Scene) {
      // Game logic update loop
    }

    // Cleanup on component unmount
    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, [level, createGame, parentId]);

  return {
    gameStats,
    restartGame,
    gameRef,
    isGameOver,
  };
};
