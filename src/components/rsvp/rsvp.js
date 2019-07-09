import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styles from './rsvp.module.css'
import Form from '../Form/Form'
import Divider from '../divider/divider'
import Cookies from 'js-cookie'
const Rsvp = () => {
  const getUrlParameter = (name) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = typeof window !== 'undefined' ? regex.exec(window.location.search) : null;
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }
  return (
    <div className="rsvp">
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
          const edge = data.allInvitesJson.edges.find(edge => edge.node.id === getUrlParameter('invite'));
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
    </div>
  )
}
export default Rsvp