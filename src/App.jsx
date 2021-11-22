import { Drawer } from '@mui/material';
import { useState } from 'react';
import { useRoutes } from 'react-router';
import './App.scss';
import Header from './containers/Header/Header';
import Nav from './containers/Nav/Nav';

import Routes from './Routes';

const App = () => {

  const routes = useRoutes(Routes);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (isOpen) => {
    setIsOpen(isOpen);
  }

  return (
    <>
      <Header isOpen={isOpen} menuButtonClicked={() => toggleDrawer(!isOpen)} />
      <Drawer open={isOpen}
              onClose={() => toggleDrawer(false)}>
        <Nav navLinkClicked={() => toggleDrawer(false)}/>
      </Drawer>
      <main>
        {routes}
      </main>
    </> 
  );
}

export default App;
