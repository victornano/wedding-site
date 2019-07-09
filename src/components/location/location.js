import React from 'react'
import styles from './location.module.css'
import { FaChurch, FaGlassCheers } from 'react-icons/fa';

const Location = () => (
  <div className={styles.location}>
    <h2>Cómo llegar?</h2>
    <div className={styles.container}>
      <a href="https://waze.com/ul/hd1u0q3tfg" style={{marginRight: '40px'}} className={styles.link} ><FaChurch color="white" size={100}></FaChurch><span>Inmaculada<br/> Concepción</span></a>
      <a href="https://waze.com/ul/hd1u0nqbz1" className={styles.link} ><FaGlassCheers color="white" size={82}></FaGlassCheers><span>Recepción<br/>Vista Capital</span></a>
    </div>
  </div>
)

export default Location