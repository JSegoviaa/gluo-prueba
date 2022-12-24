import { useState } from 'react';
import { CardList, Header, Pagination } from './components';
import { useHeroes } from './hooks';
import './App.css';

export interface Query {
  offset: number;
  limit: number;
}

function App() {
  const [isSelected, setIsSelected] = useState(1);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(5);
  const query: Query = { offset, limit };
  const { heroes, setHeroes, allHeroes } = useHeroes(query);

  return (
    <div className="App">
      <Header
        setHeroes={setHeroes}
        allHeroes={allHeroes}
        offset={offset}
        limit={limit}
      />

      <CardList heroes={heroes} setHeroes={setHeroes} />

      {heroes.length >= 5 && heroes.length < 20 ? (
        <Pagination
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          setLimit={setLimit}
          setOffset={setOffset}
          offset={offset}
        />
      ) : null}
    </div>
  );
}

export default App;
