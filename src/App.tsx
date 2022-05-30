import React from 'react';
import { AddToBox } from './components/AddToBox';
import { InfoBox } from './components/InfoBox';

const App = () => {
  return (
    <div className="app">
      <InfoBox />
      <div className="spacer"></div>
      <AddToBox />
    </div>
  );
};

export default App;
