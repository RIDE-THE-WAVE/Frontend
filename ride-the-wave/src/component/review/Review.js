import React from 'react';
import styles from './Review.module.css';
import logo from '../img/logo.png'; // 나중에 공통이미지는 따로 관리하기
import write from '../img/write.png';
import question from '../img/question.png';
import { Link } from 'react-router-dom';
import BottomNav from '../common/BottomNav';


function Review() {
  return (
    <div className={styles.Review}>
        <div className={styles.item_2}>2
            Review
            <div className={styles.item_3}>3
                <Link to="/review"><img src={logo} alt="logo" /></Link>
            </div>
            <div className={styles.item_3}>3
                <div className={styles.item_4}>4
                    {/* 제목 박스가 들어갈 예정 */}
                    <div className={styles.item_5}>5 아무말 대잔치
                    </div>
                    <div className={styles.item_5}>5 
                      <span><img src={write} alt="write" width='50%'/></span>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.item_2}>2
          <div className={styles.item_3_2_1}>
            <span><img src={question} alt="question" width='10%'/></span>
            설명 - 오른쪽 정렬 (24시간 후 자동으로~)
          </div>
          <div className={styles.item_3_2_2}>
                {/* 하단 클릭바 */}
                <div className={styles.item_4_2}>4
                </div>
                <div className={styles.item_4_2}>4
                </div>
                <div className={styles.item_4_2}>4
                </div>
                <div className={styles.item_4_2}>4
                </div>
                <div className={styles.item_4_2}>4
                </div>
                <div className={styles.item_4_2}>4
                </div>
                <div className={styles.item_4_2}>4
                </div>
                <div className={styles.item_4_2}>4
                </div>
                <div className={styles.item_4_2}>4
                </div>
                <div className={styles.item_4_2}>4
                </div>
                <div className={styles.item_4_2}>4
                </div>
                <div className={styles.item_4_2}>4
                </div>
                <div className={styles.item_4_2}>4
                </div>
              </div>
          </div>
          <BottomNav />
    </div>
);
}

export default Review;
