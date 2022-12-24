import { Dispatch, FC, SetStateAction } from 'react';
import { Heroe } from '../interfaces';
import Card from './Card';

interface Props {
  heroes: Heroe[];
  setHeroes: Dispatch<SetStateAction<Heroe[]>>;
}

const CardList: FC<Props> = ({ heroes, setHeroes }) => {
  const onDeleteElement = (id: number) => {
    const newHeroes = heroes.filter((heroe) => heroe.id !== id);
    setHeroes(newHeroes);
  };

  return (
    <>
      {heroes.map((hereo) => (
        <Card key={hereo.id} heroe={hereo} onDeleteElement={onDeleteElement} />
      ))}
    </>
  );
};

export default CardList;
