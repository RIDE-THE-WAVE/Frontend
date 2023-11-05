
import React, { useState } from 'react';
import styles from './BottomNav.module.css';
import review from '../img/review.png';
import timer from '../img/timer.png';
import mypage from '../img/mypage.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';



function BottomNav() {
    const location = useLocation();
    const [activeBottomTab, setActiveBottomTab] = useState(location.state);
    const navigate = useNavigate();

    const toggleBottomTab = (tab) => {
        setActiveBottomTab(tab);
        if (tab === 'review') {
            navigate('/review', { state: 'review'});
        } else if (tab === 'grouprecords') {
            navigate('/grouprecords', { state: 'grouprecords'});
        } else if (tab === 'myrecord') {
            navigate('/myrecord', { state: 'myrecord'});
        }
    }

    return (
        <div className={styles.BottomNav_wrapper}>
            <div className={styles.BottomNav}>
                <div className={`${styles.BottomNav_item} ${activeBottomTab === "review" ? styles.BottomNav_item_active : ""}`} onClick={() => toggleBottomTab('review')}> 
                    <img src={review} alt="review"/>
                </div>
                <div className={`${styles.BottomNav_item} ${activeBottomTab === "grouprecords" ? styles.BottomNav_item_active : ""}`} onClick={() => toggleBottomTab('grouprecords')}> 
                    <img src={timer} alt="timer"/>
                </div>
                <div className={`${styles.BottomNav_item} ${activeBottomTab === "myrecord" ? styles.BottomNav_item_active : ""}`} onClick={() => toggleBottomTab('myrecord')}> 
                    <img src={mypage} alt="mypage"/>
                </div>
            </div>
        </div>
    );
}

export default BottomNav;