import React, { useState } from 'react';
import styles from './GroupRecords.module.css';
import logo from '../../img/logo.png'; // 나중에 공통이미지는 따로 관리하기
import arrow from '../../img/arrow.png';
import search_record from '../../img/search_record.png';
import { Link } from 'react-router-dom';
import BottomNav from '../../common/BottomNav';



function GroupRecords() {
    // 개인 기록(마이페이지)와 겹치는 구간이 매우 많음
    const [activeTurnTab, setActiveTurnTab] = useState('tabSide');
    const [activeLengthTab, setActiveLengthTab] = useState('tabEntireLength');
    const [classToggle, setClassToggle] = useState(false);
    const [showBtn, setShowBtn] = useState(6);
    const [showData, setShowData] = useState(showBtn);

    const handleShowBtn = (selectedClass) => {
        setShowBtn(selectedClass);
        handleToggle();
    };

    const handleToggle = () => {
        setClassToggle(!classToggle);
    };


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
                    <div>
                        <span className={styles.toggle_img}><img src={arrow} alt="arrow" onClick={handleToggle}/></span>
                    </div>
                    <div className={styles.toggle}>
                        {(() => {
                            if (classToggle === false) {
                                if (showBtn === 6) {
                                    return (
                                        <div className={`${styles.classBtn}`}>
                                            <span>&nbsp;6AM</span>
                                        </div>
                                    )
                                } else if (showBtn === 7) {
                                    return (
                                        <div className={`${styles.classBtn}`}>
                                            <span>&nbsp;7AM</span>
                                        </div>
                                    )
                                }
                            } else {
                                return (
                                    <div className={`${styles.classBtn} ${styles.classBtn_active}`}>
                                        <span onClick={handleShowBtn.bind(this, 6)}>&nbsp;6AM</span>
                                        <span onClick={handleShowBtn.bind(this, 7)}>&nbsp;7AM</span>
                                    </div>
                                )
                            }
                        })()}
                    </div>
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
                {/* <div className={`${styles.turn_type} ${activeTurnTab === "tabEntireTurn" ? styles.turn_type_active : ""}`} onClick={() => setActiveTurnTab("tabEntireTurn")}>
                    <span>전체</span>
                </div> */}
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
                {/* 모든 턴에 대한 정보를 통째로 갖고 있는 상태에서 해야겠다...?! */}
                <div className={styles.contents}>
                    {/* 반복문으로 구현 및 무한 스크롤 */}
                    {/* 한 사람의 기록 시작 */}
                    <div className={`${styles.content} ${showBtn === 6 ? "" : styles.content_unactive}`}>
                        <div className={`${styles.records} ${activeTurnTab === "tabSide" ? "" : styles.records_unactive}`}>
                            <div className={styles.record}>
                                <span>6시 - 이름A - 사이드</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabHalf")) ? "" : styles.record_unactive}`}>
                                <span>10.00</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabFull")) ? "" : styles.record_unactive}`}>
                                <span>21.00</span>
                            </div>
                        </div>
                        <div className={`${styles.records} ${activeTurnTab === "tabFlip" ? "" : styles.records_unactive}`}>
                            <div className={styles.record}>
                                <span>6시 - 이름A - 플립</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabHalf")) ? "" : styles.record_unactive}`}>
                                <span>10.00</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabFull")) ? "" : styles.record_unactive}`}>
                                <span>21.00</span>
                            </div>
                        </div>
                        <div className={`${styles.records} ${activeTurnTab === "tabStart" ? "" : styles.records_unactive}`}>
                            <div className={styles.record}>
                                <span>6시 - 이름A - 스타트</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabHalf")) ? "" : styles.record_unactive}`}>
                                <span>10.00</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabFull")) ? "" : styles.record_unactive}`}>
                                <span>21.00</span>
                            </div>
                        </div>
                        <div className={`${styles.records} ${activeTurnTab === "tabFin" ? "" : styles.records_unactive}`}>
                            <div className={styles.record}>
                                <span>6시 - 이름A - 오리발</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabHalf")) ? "" : styles.record_unactive}`}>
                                <span>10.00</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabFull")) ? "" : styles.record_unactive}`}>
                                <span>21.00</span>
                            </div>
                        </div>
                    </div>
                    {/* 한 사람의 기록 끝 */}
                    {/* 한 사람의 기록 시작 */}
                    <div className={`${styles.content} ${showBtn === 7 ? "" : styles.content_unactive}`}>
                        <div className={`${styles.records} ${activeTurnTab === "tabSide" ? "" : styles.records_unactive}`}>
                            <div className={styles.record}>
                                <span>7시 - 이름B - 사이드</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabHalf")) ? "" : styles.record_unactive}`}>
                                <span>10.00</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabFull")) ? "" : styles.record_unactive}`}>
                                <span>21.00</span>
                            </div>
                        </div>
                        <div className={`${styles.records} ${activeTurnTab === "tabFlip" ? "" : styles.records_unactive}`}>
                            <div className={styles.record}>
                                <span>7시 - 이름B - 플립</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabHalf")) ? "" : styles.record_unactive}`}>
                                <span>10.00</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabFull")) ? "" : styles.record_unactive}`}>
                                <span>21.00</span>
                            </div>
                        </div>
                        <div className={`${styles.records} ${activeTurnTab === "tabStart" ? "" : styles.records_unactive}`}>
                            <div className={styles.record}>
                                <span>7시 - 이름B - 스타트</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabHalf")) ? "" : styles.record_unactive}`}>
                                <span>10.00</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabFull")) ? "" : styles.record_unactive}`}>
                                <span>21.00</span>
                            </div>
                        </div>
                        <div className={`${styles.records} ${activeTurnTab === "tabFin" ? "" : styles.records_unactive}`}>
                            <div className={styles.record}>
                                <span>7시 - 이름B - 오리발</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabHalf")) ? "" : styles.record_unactive}`}>
                                <span>10.00</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabFull")) ? "" : styles.record_unactive}`}>
                                <span>21.00</span>
                            </div>
                        </div>
                    </div>
                    {/* 한 사람의 기록 끝 */}
                    {/* 한 사람의 기록 시작 */}
                    <div className={`${styles.content} ${showBtn === 6 ? "" : styles.content_unactive}`}>
                        <div className={`${styles.records} ${activeTurnTab === "tabSide" ? "" : styles.records_unactive}`}>
                            <div className={styles.record}>
                                <span>6시 - 이름C - 사이드</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabHalf")) ? "" : styles.record_unactive}`}>
                                <span>10.00</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabFull")) ? "" : styles.record_unactive}`}>
                                <span>21.00</span>
                            </div>
                        </div>
                        <div className={`${styles.records} ${activeTurnTab === "tabFlip" ? "" : styles.records_unactive}`}>
                            <div className={styles.record}>
                                <span>6시 - 이름C - 플립</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabHalf")) ? "" : styles.record_unactive}`}>
                                <span>10.00</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabFull")) ? "" : styles.record_unactive}`}>
                                <span>21.00</span>
                            </div>
                        </div>
                        <div className={`${styles.records} ${activeTurnTab === "tabStart" ? "" : styles.records_unactive}`}>
                            <div className={styles.record}>
                                <span>6시 - 이름C - 스타트</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabHalf")) ? "" : styles.record_unactive}`}>
                                <span>10.00</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabFull")) ? "" : styles.record_unactive}`}>
                                <span>21.00</span>
                            </div>
                        </div>
                        <div className={`${styles.records} ${activeTurnTab === "tabFin" ? "" : styles.records_unactive}`}>
                            <div className={styles.record}>
                                <span>6시 - 이름C - 오리발</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabHalf")) ? "" : styles.record_unactive}`}>
                                <span>10.00</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabFull")) ? "" : styles.record_unactive}`}>
                                <span>21.00</span>
                            </div>
                        </div>
                    </div>
                    {/* 한 사람의 기록 끝 */}
                </div>
            </div>
            <BottomNav />
        </div>
    );
}

export default GroupRecords;
