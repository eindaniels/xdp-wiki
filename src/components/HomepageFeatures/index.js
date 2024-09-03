import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Geschichte',
    description: (
      <>
        Finde heraus was wir alles
        bereits veranstaltet haben und wie es verlaufen ist.
      </>
    ),
  },
  {
    title: 'Blogs',
    description: (
      <>
        Finde mehr über das Team hinter
        den Projekten heraus, indem du ihre
        Blog-Posts liest.
      </>
    ),
  },
  {
    title: 'Downloads',
    description: (
      <>
        Jegliche Projekte die wir gemacht haben findest du dort, bis auf paar Ausnahmen haha.
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
