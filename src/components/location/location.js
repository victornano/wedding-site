import React from 'react'
import styles from './location.module.css'
import { FaChurch, FaGlassCheers } from 'react-icons/fa';

const Location = () => (
  <div className={styles.location}>
    <h2>Cómo llegar?</h2>
    <div className={styles.container}>
      <a href="" style={{marginRight: '40px'}} className={styles.link} ><FaChurch color="white" size={100}></FaChurch><span>Iglesia de <br/> Alajuelita</span></a>
      <a href="" className={styles.link} ><FaGlassCheers color="white" size={82}></FaGlassCheers><span>Recepción<br/>Vista Capital</span></a>
    </div>
  </div>
)

export default Location