import { useState } from 'react';
import  styles from './App.module.css'
import Title from './components/Title/Title';
import Background from './components/Background/Background';
import Smoke from './components/Rocket/Smoke';
import Grid from './components/Grid/Grid';
import Rocket from './components/Rocket/Rocket';

import facts from './components/Data/NASA_facts.json'

function App() {
  const [factsState, setFactsState] = useState(facts);

  return (
    <div className={styles.App}>
      <Title />
      <Background />
      <Grid facts={factsState} />
      <Rocket />
      <Smoke />
    </div>
  );
}

export default App;
