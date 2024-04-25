import './style.css';

export enum Direction {
  up = 'up',
  right = 'right',
  down = 'down',
  left = 'left'
}

export interface ILadybug
{
  posX: number;
  posY: number;
  orientation: Direction;
}
interface LadybugProps { position: ILadybug }
export const Ladybug : React.FC<LadybugProps> = ({ position }) => {
  return (
    <div
      className={`ladybug ladybug--${position.orientation}`}
      style={{
        top: `${position.posX}px`,
        left: `${position.posY}px`,
      }}
    />
  );
};

export default Ladybug;