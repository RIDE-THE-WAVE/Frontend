import React from 'react';
import styles from './MyRecord.module.css';
import logo from '../../img/logo.png'; // 나중에 공통이미지는 따로 관리하기
import { Link } from 'react-router-dom';

function MyRecord() {
    return (
        <div className={styles.MyRecord}>
            <div className={styles.item_2}>2
                MyRecord
                <div className={styles.item_3}>3
                    <img src={logo} alt="logo" />
                </div>
                <div className={styles.item_3}>3
                    <div className={styles.item_4}>
                        4 김 재 환
                    </div>
                </div>
            </div>
            <div className={styles.item_2_2}>
                <div className={styles.item_3_2}>
                    토글. 화살표 이미지 + 날짜 3
                </div>
                <div className={styles.item_3_2}>
                    토글. 화살표 이미지 + 시간 3
                </div>
                <div className={styles.item_3_2}>
                    토글. 화살표 이미지 + 영법 3
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
                        <div className={styles.item_5_4_1}>설명 이미지
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
                        <div className={styles.item_5_5_2}>이미지</div>
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
                        <div className={styles.item_5_5_2}>이미지</div>
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
                        <div className={styles.item_5_5_2}>이미지</div>
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
                        <div className={styles.item_5_5_2}>이미지</div>
                    </div>
                  </div>
              </div>
            <div className={styles.item_2}>2
                <div className={styles.item_3_6}>
                  {/* 하단 클릭바 */}
                  <div className={styles.item_4_6}>4 <Link to="/review"><span>리뷰</span></Link>
                  </div>
                  <div className={styles.item_4_6}>4 <Link to="/grouprecords"><span>전체 기록</span></Link>
                  </div>
                  <div className={styles.item_4_6}>4 <span>마이페이지</span>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default MyRecord;
