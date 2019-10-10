import React from 'react';
import { Helmet } from 'react-helmet';
import HeroBackground from '../components/HeroBackground/HeroBackground';
import Layout from '../components/Layout/layout';
import styles from '../styles/online.module.css';
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
        <p className={styles.heroSubtitle}>
        TOAST ONLINE <a href="https://www.toasttab.com/fuji-at-west-on-chestnut/v2/online-order" target="_blank">ORDER HERE</a>
        </p>
        <p className={styles.heroSubtitle}>
        GRUBHUB <a href="https://www.grubhub.com/restaurant/montien-thai-restaurant-63-stuart-st-boston/1251090" target="_blank">ORDER HERE</a>
        </p>
        <p className={styles.heroSubtitle}>
        UBER EATS <a href="https://www.ubereats.com/en-US/boston/food-delivery/montien-thai-restaurant/Hq6kb3N4RTKg0N3q0-PNzQ/" target="_blank">ORDER HERE</a>
        </p>
      </div>
    </HeroBackground>
  </Layout>
);
