import React, { useState } from 'react';
import styles from './MyRecord.module.css';
import logo from '../../img/logo.png'; // 나중에 공통이미지는 따로 관리하기
import arrow from '../../img/arrow.png';
import question from '../../img/question.png';
import hide from '../../img/hide.png';
import eye from '../../img/eye.png';
import BottomNav from '../../common/BottomNav';
import { Link } from 'react-router-dom';
import MyRecordModal from '../../modal/MyRecordModal';

function MyRecord() {
    const [activeTurnTab, setActiveTurnTab] = useState('tabEntireTurn');
    const [activeLengthTab, setActiveLengthTab] = useState('tabEntireLength');
    const [showModal, setShowModal] = useState(false);
    const [activeSide, setActiveSide] = useState(true);
    const [activeFlip, setActiveFlip] = useState(true);
    const [activeStart, setActiveStart] = useState(true);
    const [activeFin, setActiveFin] = useState(true);

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    // 바뀐 값들을 전체 기록에 적용해야한다.
    // 기록이 기간별로 더 많아지면 어떡하지..?
    const toggleActiveSide = () => {
        setActiveSide(!activeSide);
    }

    const toggleActiveFlip = () => {
        setActiveFlip(!activeFlip);
    }

    const toggleActiveStart = () => {
        setActiveStart(!activeStart);
    }

    const toggleActiveFin= () => {
        setActiveFin(!activeFin);
    }

    return (
        <div className={styles.MyRecord}>
            <div className={styles.header}>
                <Link to="/myrecord">
                    <div className={styles.logo_box}>
                        <img src={logo} alt="logo" />
                    </div>
                </Link>
                <div className={styles.user_name_box}>
                    <div className={styles.user_name}>
                        {/* 로그인에서 입력 받은 값으로 출력하게 만들어야한다. */}
                        <span>김재환B</span>
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
                    <div className={styles.length_option_left_box}>
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
                    <div className={styles.length_option_right_box} onClick={openModal}>
                        <img src={question} alt="question" width='20%'/>
                        <img src={hide} alt="hide" width='20%'/>
                        <img src={eye} alt="eye" width='20%'/>
                    </div>
                    {showModal && 
                        <div onClick={closeModal}>
                            <MyRecordModal />
                        </div>
                    }
                </div>
            </div>
            <div className={styles.contents_box}>
              <div className={styles.contents}>
                {/* 아래는 공통 컴포넌트로 뺄 수 있다. 눈이미지 제외*/}
                    <div className={`${styles.record_of_turn_type_box} ${((activeTurnTab === "tabEntireTurn") || (activeTurnTab === "tabSide")) ? "" : styles.record_of_turn_type_box_unactive}`}>
                        <div className={styles.records}>
                            <div className={styles.record}>
                                <span>사이드</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabHalf")) ? "" : styles.record_unactive}`}>
                                <span>10.00</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabFull")) ? "" : styles.record_unactive}`}>
                                <span>21.00</span>
                            </div>
                        </div>
                        <div className={styles.show} onClick={() => toggleActiveSide()} >
                            {activeSide ? <img src={eye} alt="eye"/> : <img src={hide} alt="eye"/>}
                        </div>
                    </div>
                    <div className={`${styles.record_of_turn_type_box} ${((activeTurnTab === "tabEntireTurn") || (activeTurnTab === "tabFlip")) ? "" : styles.record_of_turn_type_box_unactive}`}>
                        <div className={styles.records}>
                            <div className={styles.record}>
                                <span>플립</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabHalf")) ? "" : styles.record_unactive}`}>
                                <span>10.00</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabFull")) ? "" : styles.record_unactive}`}>
                                <span>21.00</span>
                            </div>
                        </div>
                        <div className={styles.show} onClick={() => toggleActiveFlip()} >
                            {activeFlip ? <img src={eye} alt="eye"/> : <img src={hide} alt="eye"/>}
                        </div>
                    </div>
                    <div className={`${styles.record_of_turn_type_box} ${((activeTurnTab === "tabEntireTurn") || (activeTurnTab === "tabStart")) ? "" : styles.record_of_turn_type_box_unactive}`}>
                        <div className={styles.records}>
                            <div className={styles.record}>
                                <span>스타트</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabHalf")) ? "" : styles.record_unactive}`}>
                                <span>10.00</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabFull")) ? "" : styles.record_unactive}`}>
                                <span>21.00</span>
                            </div>
                        </div>
                        <div className={styles.show} onClick={() => toggleActiveStart()} >
                            {activeStart ? <img src={eye} alt="eye"/> : <img src={hide} alt="eye"/>}
                        </div>
                    </div>
                    <div className={`${styles.record_of_turn_type_box} ${((activeTurnTab === "tabEntireTurn") || (activeTurnTab === "tabFin")) ? "" : styles.record_of_turn_type_box_unactive}`}>
                        <div className={styles.records}>
                            <div className={styles.record}>
                                <span>오리발</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabHalf")) ? "" : styles.record_unactive}`}>
                                <span>10.00</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabFull")) ? "" : styles.record_unactive}`}>
                                <span>21.00</span>
                            </div>
                        </div>
                        <div className={styles.show} onClick={() => toggleActiveFin()} >
                            {activeFin ? <img src={eye} alt="eye"/> : <img src={hide} alt="eye"/>}
                        </div>
                    </div>
                  </div>
              </div>
              <BottomNav />
        </div>
    );
}

export default MyRecord;
