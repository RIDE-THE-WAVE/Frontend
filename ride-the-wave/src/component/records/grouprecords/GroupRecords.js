import React, { useState } from 'react';
import styles from './GroupRecords.module.css';
import logo from '../../img/logo.png'; // 나중에 공통이미지는 따로 관리하기
import arrow from '../../img/arrow.png';
import search_record from '../../img/search_record.png';
import { Link } from 'react-router-dom';
import BottomNav from '../../common/BottomNav';



function GroupRecords() {
    // 개인 기록(마이페이지)와 겹치는 구간이 매우 많음
    const [activeTurnTab, setActiveTurnTab] = useState('tabEntireTurn');
    const [activeLengthTab, setActiveLengthTab] = useState('tabEntireLength');
    // const [activeSide, setActiveSide] = useState(true);
    // const [activeFlip, setActiveFlip] = useState(true);
    // const [activeStart, setActiveStart] = useState(true);
    // const [activeFin, setActiveFin] = useState(true);

    // const toggleActiveSide = () => {
    //     setActiveSide(!activeSide);
    // }

    // const toggleActiveFlip = () => {
    //     setActiveFlip(!activeFlip);
    // }

    // const toggleActiveStart = () => {
    //     setActiveStart(!activeStart);
    // }

    // const toggleActiveFin= () => {
    //     setActiveFin(!activeFin);
    // }

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
                            <img src={search_record} alt="search_record" />
                        </div>
                        {/* Login 의 입력 받는 창 넣기 */}
                        <div className={styles.user_search}>
                            <span>이름</span>
                        </div>
                        <div className={styles.empty}></div>
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
                <div className={`${styles.turn_type} ${activeTurnTab === "tabSide" ? styles.turn_type_active : ""}`} onClick={() => setActiveTurnTab("tabSide")}>
                    <span>사이드</span>
                </div>
                <div className={`${styles.turn_type} ${activeTurnTab === "tabFlip" ? styles.turn_type_active : ""}`} onClick={() => setActiveTurnTab("tabFlip")}>
                    <span>플립</span>
                </div>
                <div className={`${styles.turn_type} ${activeTurnTab === "tabStart" ? styles.turn_type_active : ""}`} onClick={() => setActiveTurnTab("tabStart")}>
                    <span>스타트</span>
                </div>
                <div className={`${styles.turn_type} ${activeTurnTab === "tabFin" ? styles.turn_type_active : ""}`} onClick={() => setActiveTurnTab("tabFin")}>
                    <span>오리발</span>
                </div>
                <div className={`${styles.turn_type} ${activeTurnTab === "tabEntireTurn" ? styles.turn_type_active : ""}`} onClick={() => setActiveTurnTab("tabEntireTurn")}>
                    <span>전체</span>
                </div>
            </div>
            <div className={styles.contents_length_option_box}>
                <div className={styles.length_option_inner_box}>
                    <div className={`${styles.length_option} ${activeLengthTab === "tabHalf" ? styles.length_option_active : ""}`} onClick={() => setActiveLengthTab("tabHalf")}>
                        <span>25</span>
                    </div>
                    <div className={`${styles.length_option} ${activeLengthTab === "tabFull" ? styles.length_option_active : ""}`} onClick={() => setActiveLengthTab("tabFull")}>
                        <span>50</span>
                    </div>
                    <div className={`${styles.length_option} ${activeLengthTab === "tabEntireLength" ? styles.length_option_active : ""}`} onClick={() => setActiveLengthTab("tabEntireLength")}>
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
                            <span>이름</span>                        
                        </div>
                        <div className={styles.record}>
                            <span>10.00.00</span>
                        </div>
                        <div className={styles.record}>
                            <span>20.00.00</span>
                        </div>
                    </div>
                    <div className={styles.records}>
                        <div className={styles.record}>
                            <span>이름</span>                        
                        </div>
                        <div className={styles.record}>
                            <span>10.00.00</span>
                        </div>
                        <div className={styles.record}>
                            <span>20.00.00</span>
                        </div>
                    </div>
                    <div className={styles.records}>
                        <div className={styles.record}>
                            <span>이름</span>                        
                        </div>
                        <div className={styles.record}>
                            <span>10.00.00</span>
                        </div>
                        <div className={styles.record}>
                            <span>20.00.00</span>
                        </div>
                    </div>
                    <div className={styles.records}>
                        <div className={styles.record}>
                            <span>이름</span>                        
                        </div>
                        <div className={styles.record}>
                            <span>10.00.00</span>
                        </div>
                        <div className={styles.record}>
                            <span>20.00.00</span>
                        </div>
                    </div>
                    <div className={styles.records}>
                        <div className={styles.record}>
                            <span>이름</span>                        
                        </div>
                        <div className={styles.record}>
                            <span>10.00.00</span>
                        </div>
                        <div className={styles.record}>
                            <span>20.00.00</span>
                        </div>
                    </div>
                    <div className={styles.records}>
                        <div className={styles.record}>
                            <span>이름</span>                        
                        </div>
                        <div className={styles.record}>
                            <span>10.00.00</span>
                        </div>
                        <div className={styles.record}>
                            <span>20.00.00</span>
                        </div>
                    </div>
                    <div className={styles.records}>
                        <div className={styles.record}>
                            <span>이름</span>                        
                        </div>
                        <div className={styles.record}>
                            <span>10.00.00</span>
                        </div>
                        <div className={styles.record}>
                            <span>20.00.00</span>
                        </div>
                    </div>
                    <div className={styles.records}>
                        <div className={styles.record}>
                            <span>이름</span>                        
                        </div>
                        <div className={styles.record}>
                            <span>10.00.00</span>
                        </div>
                        <div className={styles.record}>
                            <span>20.00.00</span>
                        </div>
                    </div>
                    <div className={styles.records}>
                        <div className={styles.record}>
                            <span>이름</span>                        
                        </div>
                        <div className={styles.record}>
                            <span>10.00.00</span>
                        </div>
                        <div className={styles.record}>
                            <span>20.00.00</span>
                        </div>
                    </div>
                    <div className={styles.records}>
                        <div className={styles.record}>
                            <span>이름</span>                        
                        </div>
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
