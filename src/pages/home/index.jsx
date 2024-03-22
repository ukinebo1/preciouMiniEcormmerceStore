import React from 'react'
import styles from './home.module.css'

function LandingPage() {
  return (
    <div className={styles.container}>
        <div className={styles.heroMessage}>
            <h1>Welcome To Uki Stores</h1>
            <p><i>Your one store shop for everything you desire</i></p>
            <button>Check Out Our New Stock</button>
        </div>
    </div>
  )
}

export default LandingPage