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
            <div className={styles.header}>
                <Link to="/myrecord">
                    <div className={styles.logo_box}>
                        <img src={logo} alt="logo" />
                    </div>
                </Link>
                <div className={styles.user_name_box}>
                    <div className={styles.user_name}>
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
                    <span><img src={arrow} alt="arrow" width='50%'/></span>
                    <span>2023.06 - 12</span>
                </div>
                <div className={styles.contents_class_toggle}>
                    <span><img src={arrow} alt="arrow" width='50%'/></span>
                    <span>6AM</span>
                </div>
                <div className={styles.contents_type_toggle}>
                    <span><img src={arrow} alt="arrow" width='50%'/></span>
                    <span>자유형</span>
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
                    <div className={styles.length_option_top_box}>
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
                    <div className={styles.length_option_bottom_box}>
                        <div className={styles.show_box}>
                            <span><img src={question} alt="question" width='20%'/></span>
                            <span><img src={hide} alt="hide" width='20%'/></span>
                            <span><img src={eye} alt="eye" width='20%'/></span>
                        </div>
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
                                <span>25m</span>
                            </div>
                            <div className={styles.record}>
                                <span>50m</span>
                            </div>
                        </div>
                        <div className={styles.show}>
                            <span><img src={eye} alt="eye" width='50%'/></span>
                        </div>
                    </div>
                    <div className={styles.record_of_turn_type_box}>
                        <div className={styles.records}>
                            <div className={styles.record}>
                                <span>플립</span>
                            </div>
                            <div className={styles.record}>
                                <span>25m</span>
                            </div>
                            <div className={styles.record}>
                                <span>50m</span>
                            </div>
                        </div>
                        <div className={styles.show}>
                            <span><img src={eye} alt="eye" width='50%'/></span>
                        </div>
                    </div>
                    <div className={styles.record_of_turn_type_box}>
                        <div className={styles.records}>
                            <div className={styles.record}>
                                <span>스타트</span>
                            </div>
                            <div className={styles.record}>
                                <span>25m</span>
                            </div>
                            <div className={styles.record}>
                                <span>50m</span>
                            </div>
                        </div>
                        <div className={styles.show}>
                            <span><img src={eye} alt="eye" width='50%'/></span>
                        </div>
                    </div>
                    <div className={styles.record_of_turn_type_box}>
                        <div className={styles.records}>
                            <div className={styles.record}>
                                <span>오리발</span>
                            </div>
                            <div className={styles.record}>
                                <span>25m</span>
                            </div>
                            <div className={styles.record}>
                                <span>50m</span>
                            </div>
                        </div>
                        <div className={styles.show}>
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
