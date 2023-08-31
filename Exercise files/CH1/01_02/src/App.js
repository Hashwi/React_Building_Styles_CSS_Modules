import React, { useState } from 'react';
import styles from './App.module.css';
import Title from './components/Title/Title';
import Background from './components/Background/Background';
import Smoke from './components/Rocket/Smoke';
import Grid from './components/Grid/Grid';
import Rocket from './components/Rocket/Rocket';

import facts from './components/Data/NASA_facts.json';

function App() {
  const [factsState, setFactsState] = useState(facts);

  const updateClicked = (id) => {
    const updatedFacts = factsState.map((fact, index) => {
      if (index === id) {
        return { ...fact, clicked: true };
      }
      return fact;
    });
    setFactsState(updatedFacts);
  };

  return (
    <div className={styles.App}>
      <Title />
      <Background />
      <Grid facts={factsState} updateClicked={updateClicked} />
      <Rocket />
      <Smoke />
    </div>
  );
}

export default App;
