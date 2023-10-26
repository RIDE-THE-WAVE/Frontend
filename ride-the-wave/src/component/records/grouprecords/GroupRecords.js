import React from 'react';
import styles from './GroupRecords.module.css';
import logo from '../../img/logo.png'; // 나중에 공통이미지는 따로 관리하기
import { Link } from 'react-router-dom';



function GroupRecords() {
    return (
        <div className={styles.GroupRecords}>
            <div className={styles.item_2}>2
                GroupRecords
                <div className={styles.item_3}>3
                    <img src={logo} alt="logo" />
                </div>
                <div className={styles.item_3}>3
                    <div className={styles.item_4}>
                        {/* 제목 박스가 들어갈 예정 */}
                        <div className={styles.item_5}>5 돋보기 이미지
                        </div>
                        4
                        <div className={styles.item_5}>5 검색창
                        </div>
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
                <div className={styles.item_3_4}>
                  <div className={styles.item_4_2}>4 25
                  </div>
                  <div className={styles.item_4_2}>4 50
                  </div>
                  <div className={styles.item_4_2}>4 전체
                  </div>
                </div>
            </div>
            <div className={styles.item_2}>2
              <div className={styles.item_3_2_2}>
                    {/* 무한 스크롤 */}
                    <div className={styles.item_4_2}>
                        <div className={styles.item_5_5}>5 이름
                        </div>
                        <div className={styles.item_5_5}>5 25m
                        </div>
                        <div className={styles.item_5_5}>5 50m
                        </div>
                    </div>
                    <div className={styles.item_4_2}>
                        <div className={styles.item_5_5}>5 이름
                        </div>
                        <div className={styles.item_5_5}>5 25m
                        </div>
                        <div className={styles.item_5_5}>5 50m
                        </div>
                    </div>
                    <div className={styles.item_4_2}>
                        <div className={styles.item_5_5}>5 이름
                        </div>
                        <div className={styles.item_5_5}>5 25m
                        </div>
                        <div className={styles.item_5_5}>5 50m
                        </div>
                    </div>
                    <div className={styles.item_4_2}>
                        <div className={styles.item_5_5}>5 이름
                        </div>
                        <div className={styles.item_5_5}>5 25m
                        </div>
                        <div className={styles.item_5_5}>5 50m
                        </div>
                    </div>
                    <div className={styles.item_4_2}>
                        <div className={styles.item_5_5}>5 이름
                        </div>
                        <div className={styles.item_5_5}>5 25m
                        </div>
                        <div className={styles.item_5_5}>5 50m
                        </div>
                    </div>
                    <div className={styles.item_4_2}>
                        <div className={styles.item_5_5}>5 이름
                        </div>
                        <div className={styles.item_5_5}>5 25m
                        </div>
                        <div className={styles.item_5_5}>5 50m
                        </div>
                    </div>
                    <div className={styles.item_4_2}>
                        <div className={styles.item_5_5}>5 이름
                        </div>
                        <div className={styles.item_5_5}>5 25m
                        </div>
                        <div className={styles.item_5_5}>5 50m
                        </div>
                    </div>
                    <div className={styles.item_4_2}>
                        <div className={styles.item_5_5}>5 이름
                        </div>
                        <div className={styles.item_5_5}>5 25m
                        </div>
                        <div className={styles.item_5_5}>5 50m
                        </div>
                    </div>
                    <div className={styles.item_4_2}>
                        <div className={styles.item_5_5}>5 이름
                        </div>
                        <div className={styles.item_5_5}>5 25m
                        </div>
                        <div className={styles.item_5_5}>5 50m
                        </div>
                    </div>
                    <div className={styles.item_4_2}>
                        <div className={styles.item_5_5}>5 이름
                        </div>
                        <div className={styles.item_5_5}>5 25m
                        </div>
                        <div className={styles.item_5_5}>5 50m
                        </div>
                    </div>
                    <div className={styles.item_4_2}>
                        <div className={styles.item_5_5}>5 이름
                        </div>
                        <div className={styles.item_5_5}>5 25m
                        </div>
                        <div className={styles.item_5_5}>5 50m
                        </div>
                    </div>
                  </div>
              </div>
            <div className={styles.item_2}>2
                <div className={styles.item_3_6}>
                  {/* 하단 클릭바 */}
                  <div className={styles.item_4_6}>4 <Link to="/review"><span>리뷰</span></Link>
                  </div>
                  <div className={styles.item_4_6}>4 전체기록
                  </div>
                  <div className={styles.item_4_6}>4 <Link to="/myrecord"><span>마이페이지</span></Link>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default GroupRecords;
