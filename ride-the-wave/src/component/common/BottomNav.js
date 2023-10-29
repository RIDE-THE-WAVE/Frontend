
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
                <div className={styles.BottomNav_item}> 
                    <Link to="/review">
                        <span><img src={review} alt="review"/></span> 리뷰
                    </Link>
                </div>
                <div className={styles.BottomNav_item}>
                    <Link to="/grouprecords">
                        <span><img src={timer} alt="timer"/></span> 전체기록
                    </Link>
                </div>
                <div className={styles.BottomNav_item}>
                    <Link to="/myrecord">
                        <span><img src={mypage} alt="mypage"/></span> 마이페이지
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BottomNav;