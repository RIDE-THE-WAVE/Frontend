import React from 'react';
import styles from './Loading.module.css';
import logo from '../img/logo.png';

function Loading() {
    
    return (
        <div className={styles.Loading}>
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

export default Loading;
