import { useRoutes } from 'react-router';
import './App.scss';
import Routes from './Routes';
import DateAdapter from '@mui/lab/AdapterMoment';
import { LocalizationProvider } from '@mui/lab';

const App = () => {

  const routes = useRoutes(Routes);

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <>
        {routes}
      </> 
    </LocalizationProvider>
  );
}

export default App;
