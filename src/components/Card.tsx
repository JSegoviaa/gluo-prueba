import { FC } from 'react';
import { Heroe } from '../interfaces';

interface Props {
  heroe: Heroe;
  onDeleteElement: (id: number) => void;
}

const Card: FC<Props> = ({ heroe, onDeleteElement }) => {
  return (
    <div className="card_box">
      <div className="card_box_thumbnail_container">
        <img
          className="card_box_thumbnail"
          src={`${heroe.thumbnail.path}.${heroe.thumbnail.extension}`}
          alt={heroe.name}
        />
      </div>
      <div className="card_box_title_container">
        <p className="card_box_title">{heroe.name}</p>
        <p className="card_box_subtitle">
          Comics: {heroe.comics.available} / Serie: {heroe.series.available} /
          Stories: {heroe.stories.available} / Events: {heroe.events.available}{' '}
        </p>
      </div>
      <div
        onClick={() => onDeleteElement(heroe.id)}
        className="card_box_button"
      >
        <img src="./borrar-icono.png" alt="borrar" />
      </div>
    </div>
  );
};

export default Card;
