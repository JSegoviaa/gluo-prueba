import { Dispatch, FC, FormEvent, SetStateAction } from 'react';
import { Heroe } from '../interfaces';
import { useForm } from '../hooks';

interface Props {
  setHeroes: Dispatch<SetStateAction<Heroe[]>>;
  allHeroes: Heroe[];
  offset: number;
  limit: number;
}

const Search: FC<Props> = (props) => {
  const { setHeroes, allHeroes, limit, offset } = props;
  const { form, handleChange, reset } = useForm({ heroe: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (form.heroe.length > 1) {
      const newHeroes = allHeroes.filter((heroe) =>
        heroe.name.includes(form.heroe)
      );

      setHeroes(newHeroes);
    } else {
      setHeroes(allHeroes.slice(offset, limit));
    }
  };

  return (
    <header className="header_box">
      <div className="header_box_title">Marvel's character list</div>
      <form onSubmit={handleSubmit} className="header_search_box">
        <img
          className="header_search_icon"
          src="./buscar-icono.png"
          alt="buscar"
        />

        <input
          name="heroe"
          value={form.heroe}
          autoComplete="off"
          onChange={handleChange}
          className="header_search_input"
          type="text"
          placeholder="Buscar como..."
        />

        {form.heroe.length > 0 ? (
          <img
            onClick={reset}
            className="header_delete_search"
            src="./borrar-busqueda.png"
            alt="buscar"
          />
        ) : null}

        <button onClick={handleSubmit} className="header_search_button">
          Buscar
        </button>
      </form>
    </header>
  );
};

export default Search;
