import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styles from './rsvp.module.css'
import Form from '../Form/Form'
import Divider from '../divider/divider'
import Cookies from 'js-cookie'

const Rsvp = () => (
  <StaticQuery query={graphql`
    query {
      allInvitesJson{
        edges {
          node {
            id,
            invitees
          }
        }
      }
    }`}
    render={data => {
      const confirmed = Cookies.get('confirmed');
      const edge = data.allInvitesJson.edges.find(edge => edge.node.id === '01');
      const invitees = edge && edge.node && edge.node.invitees ? edge.node.invitees.map(invitee => {
        return {
          name: invitee,
          confirmed: true,
        };
      }) : [];
      return confirmed ? (
        <div className="container">
          <p className={styles.message}>Gracias por confirmar!</p>
          <Divider/>
        </div>
      ) :  edge && (
        <>
          {confirmed}
          <div className={styles.rsvp}>
            <div className="container">
              <h2 className={styles.heading}>Asistirás?</h2>
              <Form invitees={invitees}/>
            </div>
          </div>
          <Divider/>
        </>
      )
    }}
  />
)

export default Rsvp