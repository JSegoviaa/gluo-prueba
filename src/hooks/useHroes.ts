import { useEffect, useState } from 'react';
import { Query } from '../App';
import { HeroesResp, Heroe } from '../interfaces';

export const useHeroes = (query: Query) => {
  const { offset, limit } = query;
  const [heroes, setHeroes] = useState<Heroe[]>([]);
  const [allHeroes, setAllHeroes] = useState<Heroe[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getHeroes = async () => {
    try {
      setIsLoading(true);

      const res = await fetch(`http://127.0.0.1:5173/response_marvel.json`);

      const { data }: HeroesResp = await res.json();

      setHeroes(data.results.slice(offset, limit));

      setAllHeroes(data.results);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log({ error });
    }
  };

  useEffect(() => {
    getHeroes();
  }, [offset, limit]);

  return { heroes, isLoading, setHeroes, allHeroes };
};
