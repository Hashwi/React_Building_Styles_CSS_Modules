import React from "react";
import GridItem from './GridItem'
import styles from './Grid.module.css'

function Grid({ facts }) {
  const renderFacts = () => {
    return facts.map(item => 
      <GridItem 
        key={item.id}
        fact={item}
      />
    );
  };

  return (
    <section className={styles.grid}>
      {renderFacts()}
    </section>
  );
}

export default Grid;
