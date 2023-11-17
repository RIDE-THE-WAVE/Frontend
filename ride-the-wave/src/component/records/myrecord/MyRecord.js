import React, { useEffect, useState } from 'react';
import styles from './MyRecord.module.css';
import logo from '../../img/logo.png'; // 나중에 공통이미지는 따로 관리하기
import arrow from '../../img/arrow.png';
import question from '../../img/question.png';
import hide from '../../img/hide.png';
import eye from '../../img/eye.png';
import BottomNav from '../../common/BottomNav';
import MyRecordModal from '../../modal/MyRecordModal';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFin, setFlip, setSide, setStart } from '../../../redux/action';
import { collection, doc, getDocs, updateDoc, where } from 'firebase/firestore';
import db from '../../../Firebase/Firebase';

function MyRecord() {
    const dispatch = useDispatch();
    const [activeTurnTab, setActiveTurnTab] = useState('tabEntireTurn');
    const [activeLengthTab, setActiveLengthTab] = useState('tabEntireLength');
    const [showModal, setShowModal] = useState(false);
    const [activeSide, setActiveSide] = useState(true); 
    const [activeFlip, setActiveFlip] = useState(true); 
    const [activeStart, setActiveStart] = useState(true); 
    const [activeFin, setActiveFin] = useState(true); 
    const [handleTurn, setHandleTurn] = useState({
        id: '',
        type: '',
        show: true,
    }); // side, flip, start, fin
    const developedData = useSelector((state) => state.developedData);
    const record = developedData.current_user_data.freestyle?.[0];

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    // 바뀐 값들을 전체 기록에 적용해야한다.
    // 기록이 기간별로 더 많아지면 어떡하지..?
    const toggleActiveSide = (user) => {
        setHandleTurn(prevState => ({
            ...prevState,
            id: user.id,
            type: 'side',
            show: !activeSide,
        }));
        setActiveSide(!activeSide);
    }

    const toggleActiveFlip = (user) => {
        setHandleTurn(prevState => ({
            ...prevState,
            id: user.id,
            type: 'flip',
            show: !activeFlip,
        }));
        setActiveFlip(!activeFlip);
    }

    const toggleActiveStart = (user) => {
        setHandleTurn(prevState => ({
            ...prevState,
            id: user.id,
            type: 'start',
            show: !activeStart,
        }));
        setActiveStart(!activeStart);
    }

    const toggleActiveFin= (user) => {
        setHandleTurn(prevState => ({
            ...prevState,
            id: user.id,
            type: 'fin',
            show: !activeFin,
        }));
        setActiveFin(!activeFin);
    }

    useEffect(() => {
        const updateData = async () => {
            if (handleTurn.type === 'side') {
                const querySnapshot = await getDocs(collection(db, "users"));
                if (querySnapshot.empty) {
                    return;
                }
                const user = await querySnapshot.docs.find((doc) => doc.data().id === handleTurn.id);
                if (!user || !user.exists()) {
                    console.log('no data');
                }
                const recordsDisplayOptionSnapshot = await getDocs(collection(db, "users", user.id, "records_display_option"));
                if (recordsDisplayOptionSnapshot.empty) {
                    return;
                }
                const recordsDisplayOptionRef = await doc(db, "users", user.id, "records_display_option", recordsDisplayOptionSnapshot.docs[0].id);
                await updateDoc(recordsDisplayOptionRef, {
                    'freestyle.side': handleTurn.show,
                });
                dispatch(setSide(handleTurn));
                console.log('handleTurn', handleTurn);
            } else if (handleTurn.type === 'flip') {
                const querySnapshot = await getDocs(collection(db, "users"));
                if (querySnapshot.empty) {
                    return;
                }
                const user = await querySnapshot.docs.find((doc) => doc.data().id === handleTurn.id);
                if (!user || !user.exists()) {
                    console.log('no data');
                }
                const recordsDisplayOptionSnapshot = await getDocs(collection(db, "users", user.id, "records_display_option"));
                if (recordsDisplayOptionSnapshot.empty) {
                    return;
                }
                const recordsDisplayOptionRef = await doc(db, "users", user.id, "records_display_option", recordsDisplayOptionSnapshot.docs[0].id);
                await updateDoc(recordsDisplayOptionRef, {
                    'freestyle.flip': handleTurn.show,
                });
                dispatch(setFlip(handleTurn));
                console.log('handleTurn', handleTurn);
            } else if (handleTurn.type === 'fin') {
                const querySnapshot = await getDocs(collection(db, "users"));
                if (querySnapshot.empty) {
                    return;
                }
                const user = await querySnapshot.docs.find((doc) => doc.data().id === handleTurn.id);
                if (!user || !user.exists()) {
                    console.log('no data');
                }
                const recordsDisplayOptionSnapshot = await getDocs(collection(db, "users", user.id, "records_display_option"));
                if (recordsDisplayOptionSnapshot.empty) {
                    return;
                }
                const recordsDisplayOptionRef = await doc(db, "users", user.id, "records_display_option", recordsDisplayOptionSnapshot.docs[0].id);
                await updateDoc(recordsDisplayOptionRef, {
                    'freestyle.fin': handleTurn.show,
                });
                dispatch(setFin(handleTurn));
                console.log('handleTurn', handleTurn);
            } else if (handleTurn.type === 'start') {
                const querySnapshot = await getDocs(collection(db, "users"));
                if (querySnapshot.empty) {
                    return;
                }
                const user = await querySnapshot.docs.find((doc) => doc.data().id === handleTurn.id);
                if (!user || !user.exists()) {
                    console.log('no data');
                }
                const recordsDisplayOptionSnapshot = await getDocs(collection(db, "users", user.id, "records_display_option"));
                if (recordsDisplayOptionSnapshot.empty) {
                    return;
                }
                const recordsDisplayOptionRef = await doc(db, "users", user.id, "records_display_option", recordsDisplayOptionSnapshot.docs[0].id);
                await updateDoc(recordsDisplayOptionRef, {
                    'freestyle.start': handleTurn.show,
                });
                dispatch(setStart(handleTurn));
                console.log('handleTurn', handleTurn);
            }
        }
        updateData();
    }, [handleTurn]);

    return (
        <div className={styles.MyRecord}>
            <div className={styles.header}>
                    <div className={styles.logo_box}>
                        <Link to="/myrecord">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                <div className={styles.user_name_box}>
                    <div className={styles.user_name}>
                        {/* 로그인에서 입력 받은 값으로 출력하게 만들어야한다. */}
                        <span>{developedData.current_user}</span>
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
                    <span>&nbsp;{developedData.auth ? developedData.current_user_data.term : " - "}</span>
                </div>
                <div className={styles.contents_class_toggle}>
                    <span className={styles.toggle_img}><img src={arrow} alt="arrow"/></span>
                    <div className={styles.toggle}>
                        <div className={`${styles.classBtn}`}>
                            <span>&nbsp;{developedData.current_user_data.class}AM</span>
                        </div>
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
                                <span>{developedData.auth && record?.side_25  ? record?.side_25  : " - "}</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabFull")) ? "" : styles.record_unactive}`}>
                                <span>{developedData.auth && record?.side_50  ? record?.side_50  : " - "}</span>
                            </div>
                        </div>
                        <div className={styles.show} onClick={() => toggleActiveSide(developedData.current_user_data)} >
                            {activeSide ? <img src={eye} alt="eye"/> : <img src={hide} alt="eye"/>}
                        </div>
                    </div>
                    <div className={`${styles.record_of_turn_type_box} ${((activeTurnTab === "tabEntireTurn") || (activeTurnTab === "tabFlip")) ? "" : styles.record_of_turn_type_box_unactive}`}>
                        <div className={styles.records}>
                            <div className={styles.record}>
                                <span>플립</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabHalf")) ? "" : styles.record_unactive}`}>
                                <span>{developedData.auth && record?.flip_25  ? record?.flip_25  : " - "}</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabFull")) ? "" : styles.record_unactive}`}>
                                <span>{developedData.auth && record?.flip_50  ? record?.flip_50  : " - "}</span>
                            </div>
                        </div>
                        <div className={styles.show} onClick={() => toggleActiveFlip(developedData.current_user_data)} >
                            {activeFlip ? <img src={eye} alt="eye"/> : <img src={hide} alt="eye"/>}
                        </div>
                    </div>
                    <div className={`${styles.record_of_turn_type_box} ${((activeTurnTab === "tabEntireTurn") || (activeTurnTab === "tabStart")) ? "" : styles.record_of_turn_type_box_unactive}`}>
                        <div className={styles.records}>
                            <div className={styles.record}>
                                <span>스타트</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabHalf")) ? "" : styles.record_unactive}`}>
                                <span>{developedData.auth && record?.start_25  ? record?.start_25  : " - "}</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabFull")) ? "" : styles.record_unactive}`}>
                                <span>{developedData.auth && record?.start_50  ? record?.start_50  : " - "}</span>
                            </div>
                        </div>
                        <div className={styles.show} onClick={() => toggleActiveStart(developedData.current_user_data)} >
                            {activeStart ? <img src={eye} alt="eye"/> : <img src={hide} alt="eye"/>}
                        </div>
                    </div>
                    <div className={`${styles.record_of_turn_type_box} ${((activeTurnTab === "tabEntireTurn") || (activeTurnTab === "tabFin")) ? "" : styles.record_of_turn_type_box_unactive}`}>
                        <div className={styles.records}>
                            <div className={styles.record}>
                                <span>오리발</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabHalf")) ? "" : styles.record_unactive}`}>
                                <span>{developedData.auth && record?.fin_25  ? record?.fin_25  : " - "}</span>
                            </div>
                            <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabFull")) ? "" : styles.record_unactive}`}>
                                <span>{developedData.auth && record?.fin_50  ? record?.fin_50  : " - "}</span>
                            </div>
                        </div>
                        <div className={styles.show} onClick={() => toggleActiveFin(developedData.current_user_data)} >
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
