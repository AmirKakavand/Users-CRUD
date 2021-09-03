import React from 'react';
import './App.css';
import { Switch } from 'react-router-dom';
import routes from './routes/routes';

function App() {
  return (
    <div className="App">
      <Switch>
        {routes}
      </Switch>
    </div>
  );
}

export default App;
