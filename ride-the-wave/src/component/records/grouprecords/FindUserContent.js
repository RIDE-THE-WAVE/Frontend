import React from "react";
import styles from "./FindUserContent.module.css";

function FindUserContent({findUser, activeTurnTab, activeLengthTab}) {
    return (
        <div className={styles.contents}>
            <div className={styles.content}>
                <div className={`${styles.records} ${activeTurnTab === "tabSide" ? "" : styles.records_unactive}`}>
                    <div className={styles.record}>
                        <span>{findUser[0].name}</span>
                    </div>
                    <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabHalf")) ? "" : styles.record_unactive}`}>
                        <span>{(findUser[0].freestyle?.[0].side_25 !== '') ? findUser[0].freestyle?.[0].side_25 : " - "}</span>
                    </div>
                    <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabFull")) ? "" : styles.record_unactive}`}>
                        <span>{(findUser[0].freestyle?.[0].side_50 !== '') ? findUser[0].freestyle?.[0].side_50 : " - "}</span>
                    </div>
                </div>
                <div className={`${styles.records} ${activeTurnTab === "tabFlip" ? "" : styles.records_unactive}`}>
                    <div className={styles.record}>
                        <span>{findUser[0].name}</span>
                    </div>
                    <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabHalf")) ? "" : styles.record_unactive}`}>
                        <span>{(findUser[0].freestyle?.[0].flip_25 !== '') ? findUser[0].freestyle?.[0].flip_25 : " - "}</span>
                    </div>
                    <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabFull")) ? "" : styles.record_unactive}`}>
                        <span>{(findUser[0].freestyle?.[0].flip_50 !== '') ? findUser[0].freestyle?.[0].flip_50 : " - "}</span>
                    </div>
                </div>
                <div className={`${styles.records} ${activeTurnTab === "tabStart" ? "" : styles.records_unactive}`}>
                    <div className={styles.record}>
                        <span>{findUser[0].name}</span>
                    </div>
                    <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabHalf")) ? "" : styles.record_unactive}`}>
                        <span>{(findUser[0].freestyle?.[0].start_25 !== '') ? findUser[0].freestyle?.[0].start_25 : " - "}</span>
                    </div>
                    <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabFull")) ? "" : styles.record_unactive}`}>
                        <span>{(findUser[0].freestyle?.[0].start_50 !== '') ? findUser[0].freestyle?.[0].start_50 : " - "}</span>
                    </div>
                </div>
                <div className={`${styles.records} ${activeTurnTab === "tabFin" ? "" : styles.records_unactive}`}>
                    <div className={styles.record}>
                        <span>{findUser[0].name}</span>
                    </div>
                    <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabHalf")) ? "" : styles.record_unactive}`}>
                        <span>{(findUser[0].freestyle?.[0].fin_25 !== '') ? findUser[0].freestyle?.[0].fin_25 : " - "}</span>
                    </div>
                    <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabFull")) ? "" : styles.record_unactive}`}>
                        <span>{(findUser[0].freestyle?.[0].fin_50 !== '') ? findUser[0].freestyle?.[0].fin_50 : " - "}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FindUserContent;