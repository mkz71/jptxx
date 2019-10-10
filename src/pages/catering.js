import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout/layout.js';
import styles from '../styles/catering.module.css';

const Catering = () => (
  <Layout>
    <Helmet>
      <title>JP Thai Express</title>
      <meta
        name='description'
        content='JP Thai Express is the Jamaica Plain, MA area’s best restaurant for 
                take-out and delivery of authentic Thai food. Since 2019, our family-owned 
                and operated restaurant serves a delectable menu that boasts over 125 dishes.'
      />
    </Helmet>

    <section className={styles.contactContainer}>
      <div className={styles.about}>
        <section className={styles.aboutInfo}>
          {/*  */}
          <h1 className={styles.contactHeader}>
            COMMING SOON
          </h1>
          
        </section>
      </div>
    </section>
  </Layout>
);

export default Catering;