import React, { Component } from 'react';
import styles from './Form.module.css'
import { FaUserCheck, FaUserTimes } from 'react-icons/fa';
import Cookies from 'js-cookie'

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      invitees: this.props.invitees 
    }
  }
  toggleItem = (name) => {
    this.setState(state => ({ 
        invitees: state.invitees.map(item => ({
          name: item.name,
          confirmed: item.name === name ? !item.confirmed : item.confirmed,
        }))
    }))
  }
  render() {
    let confirmedNumber = this.state.invitees.filter(invitee => invitee.confirmed === true).length;
    return (
      <form name="rsvp" className={styles.form} data-netlify="true" netlify-honeypot="bot-field" onSubmit={() => {
        Cookies.set('confirmed', 'true');
      }} method="POST" >
        <input type="hidden" name="form-name" value="rsvp" />
        <input type="hidden" name="invitees" value={this.state.invitees.map(invitee => `${invitee.name}: ${invitee.confirmed ? 'Si' : 'No'}  `).join(',')} />
        <p style={{fontSize: '.9em'}}><i>Dale clic para modificar asistencia.</i></p>
        <ul className={styles.inviteeList}>
          { 
            this.state.invitees.map( (invitee, index) => (
              <li className={styles.item} key={index} onClick={() => this.toggleItem(invitee.name) } >
                {
                  invitee.confirmed ? (
                      <FaUserCheck size={32} color="#EDDEAD" ></FaUserCheck>
                    ) : (
                      <FaUserTimes size={32} color="#666" ></FaUserTimes>
                      )
                    }
                <span>{invitee.name}</span>
              </li>
            ))
          }
        </ul>
        <p>{confirmedNumber} persona{confirmedNumber === 1 ? '' : 's'} confirmada{confirmedNumber === 1 ? '' : 's'}.</p>
        <button type="submit" className={styles.button}>Confirmar</button>
      </form>
    )
  }
}

export default Form;
