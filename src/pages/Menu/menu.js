import React from "react";
import Layout from "../../components/Layout/layout.js";
import { graphql } from "gatsby";

const Menu = ({ data }) => (
    <Layout>
        <h1>Menu</h1>
        <p>{ data.allMarkdownRemark.edges[0].node.frontmatter.title }</p>
        <p>{ data.allMarkdownRemark.edges[0].node.frontmatter.category }</p>
        <p>{ data.allMarkdownRemark.edges[0].node.frontmatter.price }</p>
        <p>{ data.allMarkdownRemark.edges[0].node.frontmatter.smallPrice }</p>
        <p>{ data.allMarkdownRemark.edges[0].node.frontmatter.description }</p>
    </Layout>
)

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

// Try filter or sort graphql query for categories 