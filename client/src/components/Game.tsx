// src/components/Game.tsx
import { useEffect } from "react";
import Phaser from "phaser";

const Game: React.FC = () => {
  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      scale: {
        mode: Phaser.Scale.PORTRAIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: window.innerWidth,
        height: window.innerHeight,
      },
      fps: {
        target: 60,
      },
      parent: "game-container",

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

    const game = new Phaser.Game(config);

    function preload(this: Phaser.Scene) {
      this.load.image("fruit", "/banana.png");
    }

    function create(this: Phaser.Scene) {
      const bananaGroup = this.physics.add.group();
      for (let i = 0; i < 10; i++) {
        const x = Phaser.Math.Between(50, window.innerWidth - 50);
        const y = Phaser.Math.Between(50, window.innerHeight - 50);
        const banana = bananaGroup.create(x, y, "fruit");

        banana.setInteractive();
        banana.on("pointerdown", () => {
          banana.destroy();
        });
      }
      const fruit = this.physics.add.sprite(
        window.innerWidth / 2,
        window.innerHeight / 2,
        "fruit"
      );
      fruit.setInteractive();
      fruit.on("pointerdown", () => {
        fruit.destroy();
      });
    }

    function update(this: Phaser.Scene) {
      // Game logic update loop
    }

    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <>
      <div id="game-container" className="relative max-h-screen"></div>
    </>
  );
};

export default Game;
