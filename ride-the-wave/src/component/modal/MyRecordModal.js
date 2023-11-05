import React from 'react';
import styles from './MyRecordModal.module.css';
import hide from '../img/hide.png';

function MyRecordModal() {
  return (
    <div className={styles.modal_box}>
        <div className={styles.modal_inner}>
            <div>
                <span>
                기록 노출을 원하지 않는 경우, 기록 옆 눈 이미지를 눌러주세요.
                <br/>
                <br/>
                * 25m, 50m 함께 적용됩니다.
                </span>
                <span><img src={hide} alt="hide"/></span>
            </div>
        </div>
    </div>
  );
}

export default MyRecordModal;