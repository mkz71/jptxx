import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const HeroBackground = ({ children, className }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "food.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      console.log('DATA', data);
      // Set ImageData.
      const imageData = data.file.childImageSharp.fluid;
      return (
        <BackgroundImage Tag='div' className={className} fluid={imageData}>
          {children}
        </BackgroundImage>
      );
    }}
  />
);

export default HeroBackground;
