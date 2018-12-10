import React from "react";
import Layout from "../../components/Layout/layout.js";
import styles from "./menu.module.css";
import { graphql } from "gatsby";
import Item from "./item.js";

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
        { title: "Combo", subheader: "Lunch (11AM - 3PM) served with egg roll, fried rice, & can of soda || Dinner served with egg roll, fried rice, & small soup" }
    ]

    return (
        <Layout>
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
                                    if (element.node.frontmatter.category === section.title) {
                                        return <Item frontmatter={element.node.frontmatter} />
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
        allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  title
                  path
                  category
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