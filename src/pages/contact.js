import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout/layout.js";
import styles from "../styles/contact.module.css";

console.log(styles);

const Contact = () => (
    <Layout>
        <Helmet>
            <title>Formosa Cafe</title>
            <meta 
                name="description"
                content="Formosa Cafe is the Fredericksburg, VA area’s best restaurant for 
                take-out and delivery authentic Chinese food. Since 1996, our family-owned 
                and operated restaurant serves a delectable menu that boasts over 125 dishes."/>
        </Helmet>
        <div className={styles.contactContainer}>
            <div className={styles.about}>
                <section className={styles.aboutInfo}>
                    <h1 className={styles.contactHeader}>Formosa Cafe is the Fredericksburg, VA area’s best restaurant for take-out and delivery authentic Chinese food.</h1>
                    <p className={styles.aboutParagraph}>Since 1996, our family-owned and operated restaurant serves a delectable menu that boasts over 125 dishes that includes the most authentic and traditional Chinese dishes in the area. We offer fast and friendly service whether you decide to have your meal delivered or choose to pick it up at our convenient location.</p>
                    <p className={styles.aboutParagraph}>Addtionally, Formosa Café has been offering complete catering services. Contact us to help plan your next party or event. Our catering menu offers a variety of traditional, authentic Chinese dishes, and we will deliver to your home, office, school or banquet hall.</p>
                </section>
                <aside className={styles.contact}>
                    <div className={styles.contactSection}>
                        <h1 className={styles.contactHeader}>Phone</h1>
                        <p>540.898.0088</p>
                    </div>
                    <div className={styles.contactSection}>
                        <h1 className={styles.contactHeader}>Location</h1>
                        <p>11027 Leavells Rd</p>
                        <p>Fredericksburg, VA 22407</p>
                    </div>
                    <div className={styles.contactSection}>
                        <h1 className={styles.contactHeader}>Hours</h1>
                        <p><b>Sun-Thu</b> 11a-10p</p>
                        <p><b>Sat-Fri</b> 11a-11p</p>
                    </div>
                </aside>
            </div>
            <section className={styles.contactMap}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.8389840259265!2d-77.54216704870989!3d38.26004029176391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6c095437d6ed5%3A0x6571e0d6d2035e3b!2sFormosa+Cafe!5e0!3m2!1sen!2sus!4v1544665748314"
                    width="2000"
                    height="4000"
                    frameborder="0"
                    style={{ width: "100%", height: "100%", border: 0 }}
                    allowfullscreen>
                </iframe>
            </section>
        </div>
    </Layout>
)

export default Contact;