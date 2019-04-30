import React, { Component } from 'react';
import styles from './Form.module.css'
import { FaUserCheck, FaUserTimes } from 'react-icons/fa';
import axios from "axios"

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: '',
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
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(state => ({
      ...state,
      loading: true 
     }))
    axios.post(e.target.action, 
        {
          invitees: this.state.invitees.map(invitee => `${invitee.name}: ${invitee.confirmed ? 'Si' : 'No'}  `).join(',')
        }
      )
      .then(() => {
        this.setState(state => ({
          ...state,
          message: 'Gracias por confirmar!' 
         }))
      })
      .catch(() => {
        this.setState(state => ({
          ...state,
          message: 'No pudimos confirmar. Por favor intenta mas tarde.' 
        }))
      })
      .then(() => {
        this.setState(state => ({
         ...state,
         loading: false 
        }))
      })
    // debugger;
  }
  render() {
    return this.state.loading || this.state.message ? 
      (
        this.state.loading ? 
        (
          <div style={{textAlign: 'center'}}><div className="lds-heart"><div></div></div></div>
        ) :
        <p className={styles.message}>{this.state.message}</p>
      )
      : (
      <form name="rsvp" className={styles.form} data-netlify="true" netlify-honeypot="bot-field" >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="invitees" value={this.state.invitees.map(invitee => `${invitee.name}: ${invitee.confirmed ? 'Si' : 'No'}  `).join(',')} />
        <p><i>Dale clic para modificar.</i></p>
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
        <button type="submit" className={styles.button}>Confirmar</button>
      </form>
    )
  }
}

export default Form;
