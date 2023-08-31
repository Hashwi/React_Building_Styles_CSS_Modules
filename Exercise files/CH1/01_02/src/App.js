import  styles from './App.module.css'
import Title from './components/Title/Title';
import Background from './components/Background/Background';
import Smoke from './components/Rocket/Smoke';
import Grid from './components/Grid/Grid';
import Rocket from './components/Rocket/Rocket';



function App() {
  return (
    <div className={styles.App}>
      <Title/>
      <Background />
      <Grid />
      <Rocket />
      <Smoke />
    </div>
  );
}

export default App;
