import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styles from './Gallery.module.css'
import ImageGallery from 'react-photo-gallery';

const Gallery = () => (
  <StaticQuery query={graphql`
    query {
      largeImages: allFile(filter: {relativePath: {regex: "/gallery/"}}) {
        edges {
          node {
            childImageSharp {
              fixed(quality: 100) {
                src
                width
                height
              }
            }
          }
        }
      }
    }`}
    render={data => {
      const images = data.largeImages.edges.map((image, index) => ({
        src: image.node.childImageSharp.fixed.src,
        height: image.node.childImageSharp.fixed.height,
        width: image.node.childImageSharp.fixed.width,
      }));
      return (
        <div className={`${styles.gallery} clearfix`} >
          <ImageGallery photos={images} />
        </div>
    )}}
  />
)

export default Gallery