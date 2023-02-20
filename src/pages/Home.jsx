import { UserContext } from '../context/userContext';
import { useContext } from 'react';

function Home() {
  const { user } = useContext(UserContext);

  return <div>Home</div>;
}

export default Home;
