import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout/layout.js';
import styles from '../styles/contact.module.css';

const Contact = () => (
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
          <h1 className={styles.contactHeader}>
            JP Thai Express is the Jamaica Plain, MA area’s best restaurant for
            take-out and delivery of authentic Thai food.
          </h1>
          <p className={styles.aboutParagraph}>
            Since 2019, our family-owned and operated restaurant serves a
            delectable menu that boasts over 125 dishes that includes the most
            authentic and traditional Thai dishes in the area. We offer fast
            and friendly service whether you decide to have your meal delivered
            or choose to pick it up at our convenient location.
          </p>
          <p className={styles.aboutParagraph}>
            Addtionally, JP Thai Express has been offering complete catering
            services. Contact us to help plan your next party or event. Our
            catering menu offers a variety of traditional, authentic Thai
            dishes, and we will deliver to your home, office, school or banquet
            hall.
          </p>
        </section>
        <aside className={styles.contact}>
          <div className={styles.contactSection}>
            <h1 className={styles.contactHeader}>Phone</h1>
            <p className={styles.contactParagraph}>617.983.1388</p>
          </div>
          <div className={styles.contactSection}>
            <h1 className={styles.contactHeader}>Location</h1>
            <p className={styles.contactParagraph}>3704 Washington St</p>
            <p className={styles.contactParagraph}>Jamaica Plain, MA 02130</p>
          </div>
          <div className={styles.contactSection}>
            <h1 className={styles.contactHeader}>Hours</h1>
            <p className={styles.contactParagraph}>
              <b>Sun-Tue</b> 12:00pm-10:30pm
            </p>
            <p className={styles.contactParagraph}>
              <b>Wed-Sat</b> 12:00pm-11:30pm
            </p>
          </div>
        </aside>
      </div>
      <section className={styles.contactMap}>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1832.3607919142291!2d-71.11337344770747!3d42.29981707083238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xee435d0858e82079!2sOriental%20House%20Restaurant!5e0!3m2!1sen!2suk!4v1570423244005!5m2!1sen!2suk'
          width='2000'
          height='4000'
          frameBorder='0'
          style={{ width: '100%', height: '100%', border: 0 }}
          allowFullScreen
        />
      </section>
    </section>
  </Layout>
);

export default Contact;
