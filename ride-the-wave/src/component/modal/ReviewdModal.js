import React, { useEffect, useRef, useState } from 'react';
import styles from './ReviewdModal.module.css';

function ReviewdModal({closeModal, postReview}) {
  const [comment, setComment] = useState('');
  const postReviewByEnter = (e) => {
    if (e.key === 'Enter') {
      if (comment.trim() === '') {
        alert('댓글을 입력하세요.');
        return ;
      }
      console.log('comment??', comment);
      postReview(comment);
    }
  }
  const closeModalByEscape = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  }

  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);
  
  return (
    <div className={styles.review} onKeyUp={closeModalByEscape}>
        <div className={styles.comment}>
            <textarea
                ref={textareaRef}              
                value={comment}
                placeholder="댓글을 입력하세요"
                onChange={(e) => setComment(e.target.value)}
                onKeyUp={postReviewByEnter}
            />
            <div className={styles.manage_button}>
              <span className={styles.post_button} onClick={() => postReview(comment)}>게시</span>
              <span className={styles.cancel_button} onClick={closeModal} >취소</span>
            </div>
        </div>
    </div>
  );
}

export default ReviewdModal;