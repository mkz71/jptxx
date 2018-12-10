import React from "react";
import styles from "./menu.module.css";
import { StaticQuery, graphql } from "gatsby";

// const Item = ( props ) => {
//     console.log(props.frontmatter);
//     const { title, price, smallPrice, description } = props.frontmatter;
//     return (
//     <div className={styles.menuItem}>
//         <span className={styles.itemHeader}>
//             <h1 className={styles.itemName}>{title}</h1>
//             {smallPrice ? <p className={styles.price}>M: {smallPrice}</p> : ""}
//             <p className={styles.price}>L: {price}</p>
//         </span>
//         {description ? <p className={styles.description}>{description}</p> : ""}
//     </div>)
// }

const Item = () => (
    <StaticQuery
        query={graphql`
        query itemQuery {
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
    `}
        render={data => (
    <div className={styles.menuItem}>
        <span className={styles.itemHeader}>
            <h1 className={styles.itemName}>{data.allMarkdownRemark.edges.node.frontmatter.title}</h1>
            {data.allMarkdownRemark.edges.node.frontmatter.smallPrice ? <p className={styles.price}>M: {data.allMarkdownRemark.edges.node.frontmatter.smallPrice}</p> : ""}
            <p className={styles.price}>L: {data.allMarkdownRemark.edges.node.frontmatter.price}</p>
        </span>
        {data.allMarkdownRemark.edges.node.frontmatter.description ? <p className={styles.description}>{data.allMarkdownRemark.edges.node.frontmatter.description}</p> : ""}
    </div>
        )}
    />
)

export default Item;