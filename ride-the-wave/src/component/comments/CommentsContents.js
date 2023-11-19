import React, { useState } from 'react';
import styles from './CommentsContents.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setDeleteComment, setUpdateComment } from '../../redux/action';
import db from '../../Firebase/Firebase';
import { collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';


function CommentsContents({commentsDataArray}) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editingComment, setEditingComment] = useState({
    id: '',
    content: '',
  });
  const user = useSelector((state) => state.developedData.current_user_data?.user);
  console.log('user', user);

  const handleEdit = (comment) => {
    setEditingComment(prevState => ({
      ...prevState,
      id: comment.id,
      content: comment.content,
    }));
    setIsEditing(true);
  }

  const handleSave = async (id) => {
    const commentsRef = query(collection(db, "comments"), where("id", "==", id));
    const commentsSnapshot = await getDocs(commentsRef);
    if (commentsSnapshot.empty) {
      console.log('commentsSnapshot is empty');
      return;
    }
    const commentId = commentsSnapshot.docs[0].id;
    await updateDoc(doc(db, "comments", commentId), { content: editingComment.content });
    dispatch(setUpdateComment(editingComment));
    setEditingComment({
      id: '',
      content: '',
    });
    setIsEditing(false);
  }

  const handleDelete = async (id) => {
    const commentsRef = query(collection(db, "comments"), where("id", "==", id));
    const commentsSnapshot = await getDocs(commentsRef);
    if (commentsSnapshot.empty) {
      console.log('commentsSnapshot is empty');
      return;
    }
    const commentId = commentsSnapshot.docs[0].id;
    await updateDoc(doc(db, "comments", commentId), { available: false });
    dispatch(setDeleteComment(id));
  }

  return (
    <div className={styles.contents}>
      {commentsDataArray.map((comment, index) => (
        <div key={index} className={`${comment.available ? styles.content : styles.content_unactive}`}>
          <div className={styles.comment}>
            {isEditing && comment.id === editingComment.id ? (
              <textarea
                value={editingComment.content}
                rows={3}
                onChange={(e) => setEditingComment(prevState => ({
                  ...prevState,
                  id: comment.id,
                  content: e.target.value,
                }))}
              />
            ) : (
                <span>{comment.content}</span>
            )}
          </div>
          <div key={index} className={`${user === comment.user ? styles.manage_button : styles.content_unactive}`}>
            {isEditing && comment.id === editingComment.id ? (
              <span className={styles.fix_button} onClick={() => handleSave(comment.id)}>저장</span>
            ) : (
              <span className={styles.fix_button} onClick={() => handleEdit(comment)}>수정</span>
            )}
            <span className={styles.delete_button} onClick={() => handleDelete(comment.id)}>삭제</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentsContents;
