import { useState, useEffect } from "react";
import Ladybug from "./components/Ladybug";
import { Direction, ILadybug } from "./components/Ladybug";

const STEP_SIZE = 25;

export const App: React.FC = () => {
  const [position, setPosition] = useState<ILadybug>({
    posX: 100,
    posY: 100,
    orientation: Direction.right,
  });

  useEffect(() => {
    const handleKeyUp = ({ code }: KeyboardEvent) => {
      setPosition((oldPosition: ILadybug) => {
        const p = { ...oldPosition };
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
        return p;
      });
    };
    document.addEventListener("keydown", handleKeyUp);
    return () => document.removeEventListener("keydown", handleKeyUp);
  }, []);

  return (
    <div tabIndex={-1} className="field">
      <Ladybug position={position} />
    </div>
  );
};

export default App;
