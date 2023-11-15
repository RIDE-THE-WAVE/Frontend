import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Comments.module.css';
import logo from '../img/logo.png'; // 나중에 공통이미지는 따로 관리하기
import write from '../img/write.png';
import BottomNav from '../common/BottomNav';
import ReviewdModal from '../modal/ReviewdModal';
import CommentsContents from './CommentsContents';


function Comments() {
  const [showModal, setShowModal] = useState(false);
  const commentsData = useSelector((state) => state.comments);
  const commentsDataArray = Array.isArray(commentsData) ? commentsData : [];

  const getComments = () => {
    return <CommentsContents commentsDataArray={commentsDataArray} />
  }

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
    <div className={styles.comments}>
        <div className={styles.header}>
            <Link to="/review">
              <div className={styles.logo_box}>
                  <img src={logo} alt="logo" />
              </div>
            </Link>
            <div className={styles.title_box}>
                <div className={styles.title_inner_box}>
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
          {getComments()}
        </div>
        <BottomNav />
    </div>
);
}

export default Comments;
