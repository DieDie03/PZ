import { useRoutes } from 'react-router';
import './App.scss';
import Routes from './Routes';

const App = () => {

  const routes = useRoutes(Routes);

  return (
    <>
      {routes}
    </> 
  );
}

export default App;
