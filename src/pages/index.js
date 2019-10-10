import React from 'react';
import { Helmet } from 'react-helmet';
import HeroBackground from '../components/HeroBackground/HeroBackground';
import Layout from '../components/Layout/layout';
import styles from '../styles/index.module.css';
import '../styles/minireset.css';

export default ({ data }) => (
  <Layout>
    <Helmet>
      <title>JP Thai Express</title>
      <meta
        name='description'
        content='JP Thai Express is the Jamaica Plain, MA area’s best restaurant for 
                take-out and delivery authentic Thai food. Since 2019, our family-owned 
                and operated restaurant serves a delectable menu that boasts over 125 dishes.'
      />
    </Helmet>
    <HeroBackground className={styles.gatsbyImageWrapper}>
      <div className={styles.hero}>
        <h1 className={styles.heroText}>
          Serving fantastic Thai food since 2019
        </h1>
        <p className={styles.heroSubtitle}>Best Thai Food</p>
        <h1 className={styles.heroText}>
          <br/>
        </h1>
        <p className={styles.heroSubtitle2}>
        TEL. 617.983.1388
        </p>
        <p className={styles.heroSubtitle2}>
        3704 Washington St.
        </p>
        <p className={styles.heroSubtitle2}>
        Jamaica Plain, MA 02130
        </p>
      </div>
    </HeroBackground>
  </Layout>
);
