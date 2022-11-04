import dynamic from 'next/dynamic';
import { useState } from 'react';

import Start from '../components/Start';

const Game = dynamic(() => import('../components/Game'), {
  ssr: false
});

const Home = () => {
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [placeIndex, setPlaceIndex] = useState<number | readonly number[]>(0);
  const [valueIndex, setValueIndex] = useState<number | readonly number[]>(0);
  const [sort, setSortMode] = useState<number>(0);
  return gameStarted ? (
    <Game
      placeIndex={placeIndex}
      valueIndex={valueIndex}
      sort={sort}
      setGameStarted={setGameStarted}
    />
  ) : (
    <Start
      setGameStarted={setGameStarted}
      placeIndex={placeIndex}
      setPlaceIndex={setPlaceIndex}
      valueIndex={valueIndex}
      setValueIndex={setValueIndex}
      sort={sort}
      setSortMode={setSortMode}
    />
  );
};

export default Home;
