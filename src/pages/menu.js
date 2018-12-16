import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout/layout.js";
import styles from "../styles/menu.module.css";
import { graphql } from "gatsby";

const Menu = ({ data }) => {
    const sections = [
        { title: "Soup", subheader: "Comes with crispy noodles" },
        { title: "Appetizer", subheader: "Amounts per order shown" },
        { title: "House Specialties", subheader: "Served with white rice" },
        { title: "Seafood", subheader: "Served with white rice" },
        { title: "Poultry", subheader: "Served with white rice" },
        { title: "Beef", subheader: "Served with white rice" },
        { title: "Pork", subheader: "Served with white rice" },
        { title: "Vegetable", subheader: "Served with white rice" },
        { title: "Steamed", subheader: "Served with white rice and brown sauce on the side" },
        { title: "Fried Rice/Chow Mein/Lo Mein", subheader: "Choice of combination, shrimp, chicken, beef, or pork" },
        { title: "Egg Foo Young", subheader: "Served with white rice and gravy" },
        { title: "American", subheader: "Served with fried Rice or french fries or steamed broccoli" },
        { title: "Combo", subheader: "Please order by number! Served with egg roll and fried rice. Lunch (11AM - 3PM) includes can of soda || Dinner includes small soup" }
    ]

    return (
        <Layout>
            <Helmet>
                <title>Formosa Cafe</title>
                <meta 
                    name="description"
                    content="Formosa Cafe is the Fredericksburg, VA area’s best restaurant for 
                    take-out and delivery authentic Chinese food. Since 1996, our family-owned 
                    and operated restaurant serves a delectable menu that boasts over 125 dishes."/>
            </Helmet>
            {
                sections.map(section => {
                    return (
                        <section className={styles.menuSection}>
                            <header className={styles.sectionHeader}>
                                <h1 className={styles.sectionTitle}>{section.title}</h1>
                                <h3 className={styles.sectionSubheader}>{section.subheader}</h3>
                            </header>
                            {
                                data.allMarkdownRemark.edges.map(element => {
                                    const { title, comboNumber, price, smallPrice, description, category } = element.node.frontmatter;
                                    if (category === section.title && section.title !== "Combo") {
                                        return (
                                            <div className={styles.menuItem}>
                                            <span className={styles.itemHeader}>
                                                <h1 className={styles.itemName}>{title}</h1>
                                                {/*smallPrice ? <p className={styles.price}>M: {smallPrice}</p> : ""*/}
                                                {/*<p className={styles.price}>L: {price}</p>*/}
                                                <p className={styles.price}>{price}</p>
                                            </span>
                                            {description ? <p className={styles.description}>{description}</p> : ""}
                                            </div>
                                        )
                                    }
                                    else if (category === section.title && section.title === "Combo") {
                                        return (
                                            <div className={styles.menuItem}>
                                            <span className={styles.itemHeader}>
                                                <h1 className={styles.itemName}>#{comboNumber} {title}</h1>
                                                {smallPrice ? <p className={styles.price}>L: {smallPrice}</p> : ""}
                                                <p className={styles.price}>D: {price}</p>
                                            </span>
                                            {description ? <p className={styles.description}>{description}</p> : ""}
                                            </div>
                                        )
                                    }
                                })
                            }
                        </section>
                    )
                })
            }
        </Layout>
    )
}

export const query = graphql`
    query menuQuery {
        allMarkdownRemark(
            sort: {fields:frontmatter___comboNumber, order:ASC}
          ) {
            edges {
              node {
                frontmatter {
                  title
                  path
                  category
                  comboNumber
                  price
                  smallPrice
                  description
                }
              }
            }
          }
    }
`
export default Menu;