import React from "react";
import Layout from "../../components/Layout/layout.js";
import { graphql } from "gatsby";

const Menu = ({ data }) => (
    <Layout>
        <h1>Menu</h1>
    </Layout>
)

// export const pageQuery = graphql`
//     query($path: String!)

export default Menu;