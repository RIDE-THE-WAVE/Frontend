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
            <div className={styles.header}>
                <Link to="/grouprecords">
                    <div className={styles.logo_box}>
                        <img src={logo} alt="logo" />
                    </div>
                </Link>
                <div className={styles.user_search_box}>
                    <div className={styles.user_search_inner_box}>
                        {/* 제목 박스가 들어갈 예정 */}
                        <div className={styles.user_search_img}>
                            <img src={search_record} alt="search_record" width='50%'/>
                        </div>
                        <div className={styles.user_search}>검색창
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.contents_info_toggle_box}>
                {/* 
                    토글 넣기 - 디비에서 긁어서 
                    myrecord 와 grouprecord 는 같은 컴포넌트를 사용하므로 common 에 빼줘야한다.
                */}
                <div className={styles.contents_period_toggle}>
                    <span className={styles.toggle_img}><img src={arrow} alt="arrow"/></span>
                    <span>&nbsp;2023.06 - 12</span>
                </div>
                <div className={styles.contents_class_toggle}>
                    <span className={styles.toggle_img}><img src={arrow} alt="arrow"/></span>
                    <span>&nbsp;6AM</span>
                </div>
                <div className={styles.contents_type_toggle}>
                    <span className={styles.toggle_img}><img src={arrow} alt="arrow"/></span>
                    <span>&nbsp;자유형</span>
                </div>
            </div>
            <div className={styles.contents_turn_type}>
                  <div className={styles.turn_type}>
                    <span>사이드</span>
                  </div>
                  <div className={styles.turn_type}>
                    <span>플립</span>
                  </div>
                  <div className={styles.turn_type}>
                    <span>스타트</span>
                  </div>
                  <div className={styles.turn_type}>
                    <span>오리발</span>
                  </div>
                  <div className={styles.turn_type}>
                    <span>전체</span>
                  </div>
            </div>
            <div className={styles.contents_length_option_box}>
                <div className={styles.length_option_inner_box}>
                    <div className={styles.length_option}>
                        <span>25</span>
                    </div>
                    <div className={styles.length_option}>
                        <span>50</span>
                    </div>
                    <div className={styles.length_option}>
                        <span>전체</span>
                    </div>
                </div>
            </div>
            <div className={styles.contents_box}>
              <div className={styles.contents}>
                    {/* 무한 스크롤 */}
                    <div className={styles.records}>
                        <div className={styles.record}>
                            <span>이름</span>
                        </div>
                        <div className={styles.record}>
                            <span>-</span>
                        </div>
                        <div className={styles.record}>
                            <span>-</span>
                        </div>
                    </div>
                    <div className={styles.records}>
                        <div className={styles.record}>
                            <span>이름
</span>                        </div>
                        <div className={styles.record}>
                            <span>10.00.00</span>
                        </div>
                        <div className={styles.record}>
                            <span>20.00.00</span>
                        </div>
                    </div>
                    <div className={styles.records}>
                        <div className={styles.record}>
                            <span>이름
</span>                        </div>
                        <div className={styles.record}>
                            <span>10.00.00</span>
                        </div>
                        <div className={styles.record}>
                            <span>20.00.00</span>
                        </div>
                    </div>
                    <div className={styles.records}>
                        <div className={styles.record}>
                            <span>이름
</span>                        </div>
                        <div className={styles.record}>
                            <span>10.00.00</span>
                        </div>
                        <div className={styles.record}>
                            <span>20.00.00</span>
                        </div>
                    </div>
                    <div className={styles.records}>
                        <div className={styles.record}>
                            <span>이름
</span>                        </div>
                        <div className={styles.record}>
                            <span>10.00.00</span>
                        </div>
                        <div className={styles.record}>
                            <span>20.00.00</span>
                        </div>
                    </div>
                    <div className={styles.records}>
                        <div className={styles.record}>
                            <span>이름
</span>                        </div>
                        <div className={styles.record}>
                            <span>10.00.00</span>
                        </div>
                        <div className={styles.record}>
                            <span>20.00.00</span>
                        </div>
                    </div>
                    <div className={styles.records}>
                        <div className={styles.record}>
                            <span>이름
</span>                        </div>
                        <div className={styles.record}>
                            <span>10.00.00</span>
                        </div>
                        <div className={styles.record}>
                            <span>20.00.00</span>
                        </div>
                    </div>
                    <div className={styles.records}>
                        <div className={styles.record}>
                            <span>이름
</span>                        </div>
                        <div className={styles.record}>
                            <span>10.00.00</span>
                        </div>
                        <div className={styles.record}>
                            <span>20.00.00</span>
                        </div>
                    </div>
                    <div className={styles.records}>
                        <div className={styles.record}>
                            <span>이름
</span>                        </div>
                        <div className={styles.record}>
                            <span>10.00.00</span>
                        </div>
                        <div className={styles.record}>
                            <span>20.00.00</span>
                        </div>
                    </div>
                    <div className={styles.records}>
                        <div className={styles.record}>
                            <span>이름
</span>                        </div>
                        <div className={styles.record}>
                            <span>10.00.00</span>
                        </div>
                        <div className={styles.record}>
                            <span>20.00.00</span>
                        </div>
                    </div>
                    <div className={styles.records}>
                        <div className={styles.record}>
                            <span>이름
</span>                        </div>
                        <div className={styles.record}>
                            <span>10.00.00</span>
                        </div>
                        <div className={styles.record}>
                            <span>20.00.00</span>
                        </div>
                    </div>
                  </div>
              </div>
            <BottomNav />
        </div>
    );
}

export default GroupRecords;
