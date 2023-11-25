import React, { useEffect } from 'react';
import styles from './Loading.module.css';
import logo from '../img/logo.png';
import { useNavigate } from 'react-router-dom';

function Loading() {
    const navigate = useNavigate();
    const developedData = JSON.parse(localStorage.getItem('persist:root'));

    useEffect(() => {
        if (developedData) {
            setTimeout(() => {
                navigate('/login');
            }, 1000);
        } else {
            setTimeout(() => {
                navigate('/login');
            }, 5000);
        }
    }, []);

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
