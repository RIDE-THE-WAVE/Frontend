import React, { useState } from 'react';
import styles from './MyRecord.module.css';
import logo from '../../img/logo.png'; // 나중에 공통이미지는 따로 관리하기
import arrow from '../../img/arrow.png';
import question from '../../img/question.png';
import hide from '../../img/hide.png';
import eye from '../../img/eye.png';
import BottomNav from '../../common/BottomNav';
import { Link } from 'react-router-dom';

function MyRecord() {
    const [activeTab, setActiveTab] = useState('tabEntire');

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
                  <div className={`${styles.turn_type} ${activeTab === "tabSide" ? styles.turn_type_active : ""}`} onClick={() => setActiveTab("tabSide")}>
                    <span>사이드</span>
                  </div>
                  <div className={`${styles.turn_type} ${activeTab === "tabFlip" ? styles.turn_type_active : ""}`} onClick={() => setActiveTab("tabFlip")}>
                    <span>플립</span>
                  </div>
                  <div className={`${styles.turn_type} ${activeTab === "tabStart" ? styles.turn_type_active : ""}`} onClick={() => setActiveTab("tabStart")}>
                    <span>스타트</span>
                  </div>
                  <div className={`${styles.turn_type} ${activeTab === "tabFin" ? styles.turn_type_active : ""}`} onClick={() => setActiveTab("tabFin")}>
                    <span>오리발</span>
                  </div>
                  <div className={`${styles.turn_type} ${activeTab === "tabEntire" ? styles.turn_type_active : ""}`} onClick={() => setActiveTab("tabEntire")}>
                    <span>전체</span>
                  </div>
            </div>
            <div className={styles.contents_length_option_box}>
              <div className={styles.length_option_inner_box}>
                    <div className={styles.length_option_left_box}>
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
                    <div className={styles.length_option_right_box}>
                        {/* <div className={styles.show_box}> */}
                            <img src={question} alt="question" width='20%'/>
                            <img src={hide} alt="hide" width='20%'/>
                            <img src={eye} alt="eye" width='20%'/>
                        {/* </div> */}
                    </div>
                </div>
            </div>
            <div className={styles.contents_box}>
              <div className={styles.contents}>
                    <div className={styles.record_of_turn_type_box}>
                        <div className={styles.records}>
                            <div className={styles.record}>
                                <span>사이드</span>
                            </div>
                            <div className={styles.record}>
                                <span>10.00</span>
                            </div>
                            <div className={styles.record}>
                                <span>21.00</span>
                            </div>
                        </div>
                        <div className={styles.show}>
                            <img src={eye} alt="eye"/>
                        </div>
                    </div>
                    <div className={styles.record_of_turn_type_box}>
                        <div className={styles.records}>
                            <div className={styles.record}>
                                <span>플립</span>
                            </div>
                            <div className={styles.record}>
                                <span>10.00</span>
                            </div>
                            <div className={styles.record}>
                                <span>21.00</span>
                            </div>
                        </div>
                        <div className={styles.show}>
                            <img src={eye} alt="eye"/>
                        </div>
                    </div>
                    <div className={styles.record_of_turn_type_box}>
                        <div className={styles.records}>
                            <div className={styles.record}>
                                <span>스타트</span>
                            </div>
                            <div className={styles.record}>
                                <span>10.00</span>
                            </div>
                            <div className={styles.record}>
                                <span>21.00</span>
                            </div>
                        </div>
                        <div className={styles.show}>
                            <img src={hide} alt="eye"/>
                        </div>
                    </div>
                    <div className={styles.record_of_turn_type_box}>
                        <div className={styles.records}>
                            <div className={styles.record}>
                                <span>오리발</span>
                            </div>
                            <div className={styles.record}>
                                <span>10.00</span>
                            </div>
                            <div className={styles.record}>
                                <span>21.00</span>
                            </div>
                        </div>
                        <div className={styles.show}>
                            <img src={eye} alt="eye"/>
                        </div>
                    </div>
                  </div>
              </div>
              <BottomNav />
        </div>
    );
}

export default MyRecord;
