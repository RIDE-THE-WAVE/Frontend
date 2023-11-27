import React from 'react';
import styles from './NotFound.module.css';
import logo from '../img/logo.png';

function NotFound() {
    
    return (
        <div className={styles.NotFound}>
            <div className={styles.center_box}>
                <div className={styles.center_top_inner_box}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={styles.center_bottom_inner_box}>
                    <span>잘못된 요청입니다.</span>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
