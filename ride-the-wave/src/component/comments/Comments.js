import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { collection, addDoc } from 'firebase/firestore';
import db from '../../Firebase/Firebase';
import styles from './Comments.module.css';
import logo from '../img/logo.png'; // 나중에 공통이미지는 따로 관리하기
import write from '../img/write.png';
import BottomNav from '../common/BottomNav';
import ReviewdModal from '../modal/ReviewdModal';
import CommentsContents from './CommentsContents';
import { setAddComment } from '../../redux/action';
import { fetchComments } from '../../Firebase/fetchData';


function Comments() {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const developedData = useSelector((state) => state.developedData);
    const commentsData = useSelector((state) => state.comments);
    
    useEffect(() => {
        const fetchData = () => {
            fetchComments(dispatch);
        }
        fetchData();
    }, []);
    
    
    const getComments = () => {
        // console.log('commentsData', commentsData);
        const commentsDataArray = [...commentsData].sort((a, b) => b.id - a.id);
        return <CommentsContents commentsDataArray={commentsDataArray} />
    }
    
    const openModal = () => {
        setShowModal(true);
    }
    
    const closeModal = () => {
        setShowModal(false);
    }
    
    const postReview = async (comment) => {
        if (!developedData.current_user_data.user) {
            if (developedData.auth === false) {
                alert("인증되지 않은 유저입니다.");
            } else {
                alert("로그인이 필요합니다.");
            }
            closeModal();
            return ;
        }
        if (comment.trim() === '') {
            alert('댓글을 입력하세요.');
            return ;
        }
        const maxId = Math.max(...commentsData.map((comment) => comment.id));
        const commentData = {
            user: developedData.current_user_data.user,
            content: comment,
            id: maxId + 1,
            available: true,
        }
        await addDoc(collection(db, "comments"), commentData);
        dispatch(setAddComment(commentData));
        closeModal();
    }
    
    return (
        <div className={styles.comments}>
        <div className={styles.header}>
            <Link to="/login">
              <div className={styles.logo_box}>
                  <img src={logo} alt="logo" />
              </div>
            </Link>
            <div className={styles.title_box}>
                <div className={styles.title_inner_box}>
                    <div className={styles.title}>
                        <span>익명 게시판</span>
                    </div>
                    <div className={`${developedData.auth ? styles.title_img : styles.title_img_unactive}`} onClick={openModal}>
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
