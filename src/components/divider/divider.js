import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
const Divider = () => (
  <StaticQuery query={graphql`
    query { 
      divider: file( relativePath: { eq: "gold-divider.png" }) {
        childImageSharp { fluid(maxWidth: 180, quality: 100) {
          ...GatsbyImageSharpFluid
        }}
      },
    }`}
    render={data => (
      <div style={{margin: '48px'}}>
        <Img fluid={data.divider.childImageSharp.fluid} style={{width: '60%', maxWidth: '180px', margin: '0 auto'}} />
      </div>
    )}
  />
)

export default Divider