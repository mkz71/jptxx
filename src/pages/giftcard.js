import React from 'react';
import { Helmet } from 'react-helmet';
import HeroBackground from '../components/HeroBackground/HeroBackground';
import Layout from '../components/Layout/layout';
import styles from '../styles/giftcard.module.css';
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
        E-GIFT CARDS <a href="https://www.toasttab.com/fuji-at-west-on-chestnut/giftcards" target="_blank">BUY HERE</a>
        </p>
        <p className={styles.heroSubtitle}>
        CHECK YOUR BALANCE <a href="https://www.toasttab.com/fuji-at-west-on-chestnut/findcard" target="_blank">VIEW HERE</a>
        </p>
      </div>
      
    </HeroBackground>
  </Layout>
);