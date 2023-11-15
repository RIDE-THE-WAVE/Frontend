import React from 'react';
import styles from './CommentsContents.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setDeleteComment } from '../../redux/action';
import db from '../../Firebase/Firebase';
import { collection, doc, getDocs, updateDoc, where } from 'firebase/firestore';


function CommentsContents({commentsDataArray}) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.developedData.current_user_data?.user);

  const handleDeleteClick = async (id) => {
    const querySnapshot = await getDocs(collection(db, "comments"), where("id", "==", id));
    if (querySnapshot.empty) {
      console.log('No matching documents.');
      return;
    }
    const commentRef = doc(db, "comments", querySnapshot.docs[0].id);
    console.log(commentRef.id);
    await updateDoc(commentRef, { available: false });
    dispatch(setDeleteComment(id));
  }

  return (
    <div className={styles.contents}>
      {commentsDataArray.map((comment, index) => (
        <div key={index} className={`${comment.available ? styles.content : styles.content_unactive}`}>
          <div className={styles.comment}>
            <span>{comment.content}</span>
          </div>
          <div key={index} className={`${user === comment.user ? styles.manage_button : styles.content_unactive}`}>
            <span className={styles.fix_button}>수정</span>
            <span className={styles.delete_button} onClick={() => handleDeleteClick(comment.id)}>삭제</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentsContents;
