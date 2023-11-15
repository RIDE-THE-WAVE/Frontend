import React from 'react';
import styles from './CommentsContents.module.css';
import { useSelector } from 'react-redux';


function CommentsContents({commentsDataArray}) {
  const user = useSelector((state) => state.developedData.current_user_data?.user);
  console.log(user);
  console.log(commentsDataArray);

  return (
    <div className={styles.contents}>
      {commentsDataArray.map((comment, index) => (
        <div key={index} className={`${comment.available ? styles.content : styles.content_unactive}`}>
          <div className={styles.comment}>
            <span>{comment.content}</span>
          </div>
          <div key={index} className={`${user === comment.user ? styles.manage_button : styles.content_unactive}`}>
            <span className={styles.fix_button}>수정</span>
            <span className={styles.delete_button}>삭제</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentsContents;
