// import Start from '../components/Start';

import dynamic from 'next/dynamic';

const Game = dynamic(() => import('../components/Game'), {
  ssr: false
});

const Home = () => <Game />;

export default Home;
