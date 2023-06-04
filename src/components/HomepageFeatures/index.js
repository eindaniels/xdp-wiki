import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Geschichte herausfinden',
    description: (
      <>
        Du kannst hier im Wiki herausfinden,
        was wir früher gemacht haben...
      </>
    ),
  },
  {
    title: 'Blogs & Changes',
    description: (
      <>
        Hier bekommst du fast immer neuigkeiten
        von CA wie auch Update Changelogs...
      </>
    ),
  },
  {
    title: 'Biografien',
    description: (
      <>
        Lerne die Teilnehmer von CA kennen und schreibe vlt.
        auch deine eigene Biografie...
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
