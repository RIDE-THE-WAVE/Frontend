import React, { useState } from 'react';
import styles from './GroupRecords.module.css';
import logo from '../../img/logo.png'; // 나중에 공통이미지는 따로 관리하기
import arrow from '../../img/arrow.png';
import search_record from '../../img/search_record.png';
import { Link } from 'react-router-dom';
import BottomNav from '../../common/BottomNav';
import { useSelector } from 'react-redux';
import GroupRecordsContents from './GroupRecordsContents';
import FindUserContent from './FindUserContent';

function GroupRecords() {
    const developedData = useSelector((state) => state.developedData);
    const [username, setUsername] = useState('');
    const [findUserTab, setFindUserTab] = useState(false);
    const [activeTurnTab, setActiveTurnTab] = useState('tabSide');
    const [activeLengthTab, setActiveLengthTab] = useState('tabEntireLength');
    const [classToggle, setClassToggle] = useState(false);
    const [showBtn, setShowBtn] = useState((developedData.auth ? developedData.current_user_data.class : 6));
    const sixClass = developedData.filter((data) => data.class === 6);
    const sevenClass = developedData.filter((data) => data.class === 7);
    
    const getRecords = () => {
        if (findUserTab === true && developedData.auth === true) {
            const findUser = developedData.filter((data) => data.name === username);
            if (findUser.length === 0) {
                if (showBtn === 6) {
                    return <GroupRecordsContents recordDatas={sixClass} activeTurnTab={activeTurnTab} activeLengthTab={activeLengthTab} auth={developedData.auth}/>
                } else if (showBtn === 7) {
                    return <GroupRecordsContents recordDatas={sevenClass} activeTurnTab={activeTurnTab} activeLengthTab={activeLengthTab} auth={developedData.auth}/>
                }
            } else {
                return <FindUserContent findUser={findUser} activeTurnTab={activeTurnTab} activeLengthTab={activeLengthTab} />
            }
        } else if (findUserTab === false && showBtn === 6) {
            return <GroupRecordsContents recordDatas={sixClass} activeTurnTab={activeTurnTab} activeLengthTab={activeLengthTab} auth={developedData.auth}/>
        } else if (findUserTab === false && showBtn === 7) {
            return <GroupRecordsContents recordDatas={sevenClass} activeTurnTab={activeTurnTab} activeLengthTab={activeLengthTab} auth={developedData.auth}/>
        }
    };

    const findUser = () => {
        setFindUserTab(true);
    };

    const findUserByEnter = (e) => {
        if (e.key === 'Enter') {
            findUser();
        }
    };

    const handleShowBtn = (selectedClass) => {
        setFindUserTab(false);
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
                        <div className={styles.user_search_img} onClick={findUser}>
                            {/* 버튼 누르면 해당 하는 사람 찾아야함 */}
                            <img src={search_record} alt="search_record" />
                        </div>
                        <div className={styles.user_search}>
                            <input
                                type="text"
                                placeholder="이름"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                onKeyUp={findUserByEnter}
                            />
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
                    <span>&nbsp;202306</span>
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
                {getRecords()}
            </div>
            <BottomNav />
        </div>
    );
}

export default GroupRecords;
