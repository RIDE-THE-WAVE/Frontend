import React from "react";
import styles from "./GroupRecordsContents.module.css";

function GroupRecordsContents({recordDatas, activeTurnTab, activeLengthTab, auth}) {

    return (
        <div className={styles.contents}>
            {recordDatas.map((recordData, index) => (
                <div className={styles.content} key={index}>
                    <div className={`${styles.records} ${activeTurnTab === "tabSide" ? "" : styles.records_unactive}`}>
                        <div className={styles.record}>
                            <span>{auth ? recordData.name : " - "}</span>
                        </div>
                        <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabHalf")) ? "" : styles.record_unactive}`}>
                            <span>{(recordData.freestyle?.[0]?.side_25 !== '') && (recordData.records_display_option?.[0]?.freestyle.side) ? recordData.freestyle?.[0]?.side_25 : " - "}</span>
                        </div>
                        <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabFull")) ? "" : styles.record_unactive}`}>
                            <span>{(recordData.freestyle?.[0]?.side_50 !== '') && (recordData.records_display_option?.[0]?.freestyle.side) ? recordData.freestyle?.[0]?.side_50 : " - "}</span>
                        </div>
                    </div>
                    <div className={`${styles.records} ${activeTurnTab === "tabFlip" ? "" : styles.records_unactive}`}>
                        <div className={styles.record}>
                            <span>{auth ? recordData.name : " - "}</span>
                        </div>
                        <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabHalf")) ? "" : styles.record_unactive}`}>
                            <span>{(recordData.freestyle?.[0]?.flip_25 !== '') && (recordData.records_display_option?.[0]?.freestyle.flip) ? recordData.freestyle?.[0]?.flip_25 : " - "}</span>
                        </div>
                        <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabFull")) ? "" : styles.record_unactive}`}>
                            <span>{(recordData.freestyle?.[0]?.flip_50 !== '') && (recordData.records_display_option?.[0]?.freestyle.flip) ? recordData.freestyle?.[0]?.flip_50 : " - "}</span>
                        </div>
                    </div>
                    <div className={`${styles.records} ${activeTurnTab === "tabStart" ? "" : styles.records_unactive}`}>
                        <div className={styles.record}>
                            <span>{auth ? recordData.name : " - "}</span>
                        </div>
                        <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabHalf")) ? "" : styles.record_unactive}`}>
                            <span>{(recordData.freestyle?.[0]?.start_25 !== '') && (recordData.records_display_option?.[0]?.freestyle.start) ? recordData.freestyle?.[0]?.start_25 : " - "}</span>
                        </div>
                        <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabFull")) ? "" : styles.record_unactive}`}>
                            <span>{(recordData.freestyle?.[0]?.start_50 !== '') && (recordData.records_display_option?.[0]?.freestyle.start) ? recordData.freestyle?.[0]?.start_50 : " - "}</span>
                        </div>
                    </div>
                    <div className={`${styles.records} ${activeTurnTab === "tabFin" ? "" : styles.records_unactive}`}>
                        <div className={styles.record}>
                            <span>{auth ? recordData.name : " - "}</span>
                        </div>
                        <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabHalf")) ? "" : styles.record_unactive}`}>
                            <span>{(recordData.freestyle?.[0]?.fin_25 !== '') && (recordData.records_display_option?.[0]?.freestyle.fin) ? recordData.freestyle?.[0]?.fin_25 : " - "}</span>
                        </div>
                        <div className={`${styles.record} ${((activeLengthTab === "tabEntireLength") || (activeLengthTab === "tabFull")) ? "" : styles.record_unactive}`}>
                            <span>{(recordData.freestyle?.[0]?.fin_50 !== '') && (recordData.records_display_option?.[0]?.freestyle.fin) ? recordData.freestyle?.[0]?.fin_50 : " - "}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default GroupRecordsContents;