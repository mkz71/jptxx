import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout/layout";
import styles from "../styles/index.module.css";
import "../styles/minireset.css";

export default ({ data }) => (
  <Layout>
    <Helmet>
      <title>Formosa Cafe</title>
      <meta
        name="description"
        content="Formosa Cafe is the Fredericksburg, VA area’s best restaurant for 
                take-out and delivery authentic Chinese food. Since 1996, our family-owned 
                and operated restaurant serves a delectable menu that boasts over 125 dishes."
      />
    </Helmet>
    <div className={styles.hero}>
      <h1 className={styles.heroText}>
        Serving fantastic Chinese food since 1996
      </h1>
      <p className={styles.heroSubtitle}>Voted best Chinese Food</p>
    </div>
  </Layout>
);
