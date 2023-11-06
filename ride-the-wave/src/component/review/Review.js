import React, { useState } from 'react';
import styles from './Review.module.css';
import logo from '../img/logo.png'; // 나중에 공통이미지는 따로 관리하기
import write from '../img/write.png';
import { Link } from 'react-router-dom';
import BottomNav from '../common/BottomNav';
import ReviewdModal from '../modal/ReviewdModal';


function Review() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
      setShowModal(true);
  }
  const closeModal = () => {
      setShowModal(false);
  }
  const postReview = (comment) => {
    console.log(comment);
}

  return (
    <div className={styles.Review}>
        <div className={styles.header}>
            <Link to="/review">
              <div className={styles.logo_box}>
                  <img src={logo} alt="logo" />
              </div>
            </Link>
            <div className={styles.title_box}>
                <div className={styles.title_inner_box}>
                    {/* 제목 박스가 들어갈 예정 */}
                    {/* <div className={styles.empty}></div> */}
                    <div className={styles.title}>
                        <span>익명 게시판</span>
                    </div>
                    <div className={styles.title_img} onClick={openModal}>
                        <img src={write} alt="write" />
                    </div>
                </div>
                {showModal && 
                      <div>
                          <ReviewdModal closeModal={closeModal} postReview={postReview}/>
                      </div>
                }
            </div>
        </div>
        <div className={styles.contents_box}>
          {/* 액자처럼 만들어야한다. */}
          <div className={styles.contents}>
                {/* 하단 클릭바 */}
                <div className={styles.content}>
                  <div className={styles.comment}>
                    <span>좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 </span>
                  </div>
                  <div className={styles.manage_button}>
                    {/* 본인건지 확인하고 출력해야함 */}
                    <span className={styles.fix_button}>수정</span>
                    <span className={styles.delete_button}>삭제</span>
                  </div>
                </div>
                <div className={styles.content}>
                  <div className={styles.comment}>
                    <span>좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요</span>
                  </div>
                  <div className={styles.manage_button}>
                    <span className={styles.fix_button}>수정</span>
                    <span className={styles.delete_button}>삭제</span>
                  </div>
                </div>
                <div className={styles.content}>
                  <div className={styles.comment}>
                    <span>좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 </span>
                  </div>
                  <div className={styles.manage_button}>
                    <span className={styles.fix_button}>수정</span>
                    <span className={styles.delete_button}>삭제</span>
                  </div>
                </div>
                <div className={styles.content}>
                  <div className={styles.comment}>
                    <span>좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 </span>
                  </div>
                  <div className={styles.manage_button}>
                    <span className={styles.fix_button}>수정</span>
                    <span className={styles.delete_button}>삭제</span>
                  </div>
                </div>
                <div className={styles.content}>
                  <div className={styles.comment}>
                    <span>좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 </span>
                  </div>
                  <div className={styles.manage_button}>
                    <span className={styles.fix_button}>수정</span>
                    <span className={styles.delete_button}>삭제</span>
                  </div>
                </div>
                <div className={styles.content}>
                  <div className={styles.comment}>
                    <span>좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 좋아요 </span>
                  </div>
                  <div className={styles.manage_button}>
                    <span className={styles.fix_button}>수정</span>
                    <span className={styles.delete_button}>삭제</span>
                  </div>
                </div>
              </div>
          </div>
          <BottomNav />
    </div>
);
}

export default Review;
