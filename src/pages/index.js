import React from 'react'
import Layout from '../components/layout'
import Countdown from '../components/countdown/countdown'
import Divider from '../components/divider/divider'
import Location from '../components/location/location'
import Rsvp from '../components/rsvp/rsvp'
import SEO from '../components/seo'
import Gallery from '../components/gallery/gallery';

const IndexPage = () => (
  <Layout>
    <SEO title="Nos Casamos" keywords={['boda', 'victor', 'vale', 'matrimonio']} />
    <Countdown/>
    <Divider/>
    <Location/>
    <Divider/>
    <Rsvp/>
    <Gallery/>
    <Divider/>
    <h2 style={{textAlign: 'center', marginBottom: '60px'}}>Los Esperamos!</h2>
  </Layout>
)

export default IndexPage
