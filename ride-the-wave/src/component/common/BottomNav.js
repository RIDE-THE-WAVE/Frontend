
import React from 'react';
import styles from './BottomNav.module.css';
import { Link } from 'react-router-dom';



function BottomNav() {
    return (
        <div className={styles.BottomNav_wrapper}>
            <div className={styles.BottomNav}>
                <div className={styles.BottomNav_item}>4 <Link to="/review"><span>리뷰</span></Link>
                </div>
                <div className={styles.BottomNav_item}>4 <Link to="/grouprecords"><span>전체기록</span></Link>
                </div>
                <div className={styles.BottomNav_item}>4 <Link to="/myrecord"><span>마이페이지</span></Link>
                </div>
            </div>
        </div>
    );
}

export default BottomNav;