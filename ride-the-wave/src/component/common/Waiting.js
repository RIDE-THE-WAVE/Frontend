import React from 'react';
import styles from './Waiting.module.css';
import logo from '../img/logo.png';

function Waiting() {
    
    return (
        <div className={styles.Waiting}>
            <div className={styles.center_box}>
                <div className={styles.center_top_inner_box}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={styles.center_bottom_inner_box}>
                    <span>RIDE THE WAVE</span>
                </div>
            </div>
        </div>
    );
}

export default Waiting;
