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
      const photos = [
        {
          src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
          width: 1,
          height: 1
        },
        {
          src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
          width: 3,
          height: 4
        },
        {
          src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
          width: 3,
          height: 4
        },
        {
          src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
          width: 3,
          height: 4
        },
        {
          src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/u9cG4cuJ6bU/4927x1000",
          width: 4927,
          height: 1000
        },
      
        {
          src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
          width: 3,
          height: 4
        },
        {
          src: "https://source.unsplash.com/PpOHJezOalU/800x599",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
          width: 3,
          height: 4
        },
        {
          src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
          width: 1,
          height: 1
        },
        {
          src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
          width: 3,
          height: 4
        },
        {
          src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
          width: 3,
          height: 4
        },
        {
          src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
          width: 3,
          height: 4
        },
        {
          src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/u9cG4cuJ6bU/4927x1000",
          width: 4927,
          height: 1000
        },
      
        {
          src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
          width: 3,
          height: 4
        },
        {
          src: "https://source.unsplash.com/PpOHJezOalU/800x599",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
          width: 3,
          height: 4
        },
        {
          src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
          width: 4,
          height: 3
        }
      ];
      // const images = data.largeImages.edges.map((image, index) => ({
      //   src: image.node.childImageSharp.fluid.src,
      //   thumbnail: data.thumbs.edges[index].node.childImageSharp.fixed.src,
      //   thumbnailWidth: data.thumbs.edges[index].node.childImageSharp.fixed.width,
      //   thumbnailHeight: data.thumbs.edges[index].node.childImageSharp.fixed.height,
      //   segments: image.node.childImageSharp.fluid.src.split('/')
      // }));
      // images.sort(function(a, b){
      //   const aName = a.segments[a.segments.length - 1];
      //   const bName = b.segments[b.segments.length - 1];
      //   if(aName < bName) { return -1; }
      //   if(aName > bName) { return 1; }
      //   return 0;
      // })
      return (
        <div className={`${styles.gallery} clearfix`} >
          <ImageGallery photos={images} />
        </div>
    )}}
  />
)

export default Gallery