import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styles from './rsvp.module.css'
import Form from '../Form/Form'

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
      const edge = data.allInvitesJson.edges.find(edge => edge.node.id === '01');
      const invitees = edge && edge.node && edge.node.invitees ? edge.node.invitees.map(invitee => {
        return {
          name: invitee,
          confirmed: true,
        };
      }) : [];
      // debugger;
      return edge && (
        <div className={styles.rsvp}>
          <div className="container">
            <h2 className={styles.heading}>Asistirás?</h2>
            <Form invitees={invitees}/>
          </div>
        </div>
      )
    }}
  />
)

export default Rsvp