/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

function Home() {
    const context = useDocusaurusContext();
    const {siteConfig} = context;

    return (
        <Layout
            title={siteConfig.title}
            description="null">
            <header className={clsx('hero', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                'button button--primary button--lg',
                                styles.getStarted,
                            )}
                            to={useBaseUrl('docs/intro')}>
                            Zum Wiki&nbsp;&nbsp;→
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                <div className={styles.sectionDark}>
                    <div className="container padding-vert--md">
                        <div className="row">
                            <div className="col col--8 col--offset-2">
                                <div className="margin-vert--lg text--center">
                                    <h2 className={styles.sectionDarkTitle}>
                                        Alles was du brauchst für unsere Projekte steht hier im Wiki.
                                        (Wenn es auch was gibt ;p)
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="padding-vert--xl">
                    <p className="container">
                        <p className="row">
                            <p className="col col--10 col--offset-1">
                                <div className="row margin-vert--lg">
                                    <div className="col">
                                        <h3>Geschichte</h3>
                                        <p>
                                            Lerne über die Geschichte von unseren Projekten
                                            oder auch anderen Servern :3
                                        </p>
                                    </div>
                                    <div className="col">
                                        <h3>Blogs</h3>
                                        <p>
                                            Siehe Blogs aus unseren Projekten oder sachen aus dem
                                            Real Life von unserem Admin Team
                                        </p>
                                    </div>
                                    <div className="col">
                                        <h3>Veränderbar mit GitHub</h3>
                                        <p>
                                            Wenn du willst, kannst du jederzeit durch einen
                                            Pull Request auf unseren GitHub sachen im Wiki verändern.
                                        </p>
                                    </div>
                                </div>
                            </p>
                        </p>
                    </p>
                </p>
            </main>
        </Layout>
    );
}

export default Home;