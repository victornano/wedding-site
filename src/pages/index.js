import React from 'react'
import Layout from '../components/layout'
import Countdown from '../components/countdown/countdown'
import Divider from '../components/divider/divider'
import Location from '../components/location/location'
import Rsvp from '../components/rsvp/rsvp'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Nos Casamos" keywords={['boda', 'victor', 'vale', 'matrimonio']} />
    <Countdown/>
    <Divider/>
    <Location/>
    <Divider/>
    <Rsvp/>
  </Layout>
)

export default IndexPage
