import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import styles from './header.module.css'
const Header = () => (
  <StaticQuery query={graphql`
    query { 
      bg: file( relativePath: { eq: "header-bg.jpg" }) {
        childImageSharp { fluid(maxWidth: 1000, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }}
      },
      goldenRing: file( relativePath: { eq: "golden-ring.png" }) {
        childImageSharp { fixed(width: 240, quality: 100) {
          ...GatsbyImageSharpFixed
        }}
      },
      photo: file( relativePath: { eq: "hphoto.jpg" }) {
        childImageSharp { fixed(width: 180, quality: 100) {
          ...GatsbyImageSharpFixed
        }}
      }
    }`}
    render={data => (
      <header className={styles.header}>
        <h1 className={styles.heading}>Victor y Vale<small>Nos Casamos!</small></h1>
        <Img fluid={data.bg.childImageSharp.fluid} className={styles.bg} style={{ minHeight: '360px' }} />
        <div className={styles.centerImage}>
          <div className={styles.goldenRing}>
            <Img fixed={data.goldenRing.childImageSharp.fixed} className="rotating" />
          </div>
          <div className={styles.photo}>
            <Img fixed={data.photo.childImageSharp.fixed} />
          </div>
        </div>
      </header>
    )}
  />
)

export default Header