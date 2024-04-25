import { useState } from "react";
import Ladybug from "./components/Ladybug";
import { Direction, ILadybug } from "./components/Ladybug";

const STEP_SIZE = 25;

export const App: React.FC = () => {
  const [position, setPosition] = useState<ILadybug>({
    posX: 100,
    posY: 100,
    orientation: Direction.right,
  });

  const handleKeyUp = ({ code }: React.KeyboardEvent<HTMLDivElement>) => {
    const p = { ...position };
    if (code === "ArrowUp") {
      p.orientation = Direction.up;
      p.posX = p.posX - STEP_SIZE;
    } else if (code === "ArrowLeft") {
      p.orientation = Direction.left;
      p.posY = p.posY - STEP_SIZE;
    } else if (code === "ArrowRight") {
      p.orientation = Direction.right;
      p.posY = p.posY + STEP_SIZE;
    } else if (code === "ArrowDown") {
      p.orientation = Direction.down;
      p.posX = p.posX + STEP_SIZE;
    }
    setPosition(p);
  };

  return (
    <div tabIndex={-1} className="field" onKeyDown={handleKeyUp}>
      <header>Click anywhere to start the game</header>
      <Ladybug position={position} />
    </div>
  );
};

export default App;
