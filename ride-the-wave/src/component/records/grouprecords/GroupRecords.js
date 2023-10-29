import React from 'react';
import styles from './GroupRecords.module.css';
import logo from '../../img/logo.png'; // 나중에 공통이미지는 따로 관리하기
import arrow from '../../img/arrow.png';
import search_record from '../../img/search_record.png';
import { Link } from 'react-router-dom';
import BottomNav from '../../common/BottomNav';



function GroupRecords() {
    return (
        <div className={styles.GroupRecords}>
            <div className={styles.item_2}>2
                GroupRecords
                <div className={styles.item_3}>3
                    <Link to="/grouprecords"><img src={logo} alt="logo" /></Link>
                </div>
                <div className={styles.item_3}>3
                    <div className={styles.item_4}>
                        {/* 제목 박스가 들어갈 예정 */}
                        <div className={styles.item_5}>
                            <span><img src={search_record} alt="search_record" width='50%'/></span>
                        </div>
                        <div className={styles.item_5}>검색창
                        </div>
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
            <BottomNav />
        </div>
    );
}

export default GroupRecords;
