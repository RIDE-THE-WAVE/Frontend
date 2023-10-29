import React from 'react';
import styles from './MyRecord.module.css';
import logo from '../../img/logo.png'; // 나중에 공통이미지는 따로 관리하기
import arrow from '../../img/arrow.png';
import question from '../../img/question.png';
import hide from '../../img/hide.png';
import eye from '../../img/eye.png';
import BottomNav from '../../common/BottomNav';
import { Link } from 'react-router-dom';

function MyRecord() {
    return (
        <div className={styles.MyRecord}>
            <div className={styles.item_2}>2
                MyRecord
                <div className={styles.item_3}>3
                    <Link to="/myrecord"><img src={logo} alt="logo" /></Link>
                </div>
                <div className={styles.item_3}>3
                    <div className={styles.item_4}>
                        4 김 재 환
                    </div>
                </div>
            </div>
            <div className={styles.item_2_2}>
                {/* 
                    토글 넣기 - 디비에서 긁어서 
                    myrecord 와 grouprecord 는 같은 컴포넌트를 사용하므로 common 에 빼줘야한다.
                */}
                <div className={styles.item_3_2}>
                    <span><img src={arrow} alt="arrow" width='50%'/></span> 날짜 3
                </div>
                <div className={styles.item_3_2}>
                    <span><img src={arrow} alt="arrow" width='50%'/></span> 시간 3
                </div>
                <div className={styles.item_3_2}>
                    <span><img src={arrow} alt="arrow" width='50%'/></span> 영법 3
                </div>
            </div>
            <div className={styles.item_2_3}>
                  <div className={styles.item_3_3}>3
                  </div>
                  <div className={styles.item_3_3}>3
                  </div>
                  <div className={styles.item_3_3}>3
                  </div>
                  <div className={styles.item_3_3}>3
                  </div>
                  <div className={styles.item_3_3}>3
                  </div>
            </div>
            <div className={styles.item_2}>
              <div className={styles.item_3_2_2}>
                    <div className={styles.item_4_4}>
                        <div className={styles.item_5_4}>4 25
                        </div>
                        <div className={styles.item_5_4}>4 50
                        </div>
                        <div className={styles.item_5_4}>4 전체
                        </div>
                    </div>
                    <div className={styles.item_4_4_1}>
                        <div className={styles.item_5_4_1}>
                            <span><img src={question} alt="question" width='20%'/></span>
                            <span><img src={hide} alt="hide" width='20%'/></span>
                            <span><img src={eye} alt="eye" width='20%'/></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.item_2}>
              <div className={styles.item_3_5}>
                    <div className={styles.item_4_5}>
                        <div className={styles.item_5_5}>
                            <div className={styles.item_6_5}>5 사이드
                            </div>
                            <div className={styles.item_6_5}>5 25m
                            </div>
                            <div className={styles.item_6_5}>5 50m
                            </div>
                        </div>
                        <div className={styles.item_5_5_2}>
                            <span><img src={eye} alt="eye" width='50%'/></span>
                        </div>
                    </div>
                    <div className={styles.item_4_5}>
                        <div className={styles.item_5_5}>
                            <div className={styles.item_6_5}>5 플립
                            </div>
                            <div className={styles.item_6_5}>5 25m
                            </div>
                            <div className={styles.item_6_5}>5 50m
                            </div>
                        </div>
                        <div className={styles.item_5_5_2}>
                            <span><img src={eye} alt="eye" width='50%'/></span>
                        </div>
                    </div>
                    <div className={styles.item_4_5}>
                        <div className={styles.item_5_5}>
                            <div className={styles.item_6_5}>5 스타트
                            </div>
                            <div className={styles.item_6_5}>5 25m
                            </div>
                            <div className={styles.item_6_5}>5 50m
                            </div>
                        </div>
                        <div className={styles.item_5_5_2}>
                            <span><img src={eye} alt="eye" width='50%'/></span>
                        </div>
                    </div>
                    <div className={styles.item_4_5}>
                        <div className={styles.item_5_5}>
                            <div className={styles.item_6_5}>5 오리발
                            </div>
                            <div className={styles.item_6_5}>5 25m
                            </div>
                            <div className={styles.item_6_5}>5 50m
                            </div>
                        </div>
                        <div className={styles.item_5_5_2}>
                            <span><img src={eye} alt="eye" width='50%'/></span>
                        </div>
                    </div>
                  </div>
              </div>
              <BottomNav />
        </div>
    );
}

export default MyRecord;
