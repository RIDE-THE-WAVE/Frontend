
import React from 'react';
import styles from './BottomNav.module.css';
import review from '../img/review.png';
import timer from '../img/timer.png';
import mypage from '../img/mypage.png';
import { Link } from 'react-router-dom';



function BottomNav() {
    return (
        <div className={styles.BottomNav_wrapper}>
            <div className={styles.BottomNav}>
                <Link to="/review">
                    <div className={styles.BottomNav_item}> 
                        <img src={review} alt="review"/>
                    </div>
                </Link>
                <Link to="/grouprecords">
                    <div className={styles.BottomNav_item}>
                        <img src={timer} alt="timer"/>
                    </div>
                </Link>
                <Link to="/myrecord">
                    <div className={styles.BottomNav_item}>
                        <img src={mypage} alt="mypage"/>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default BottomNav;