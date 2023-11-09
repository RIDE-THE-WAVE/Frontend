import db from './Firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { setUserComments, setRecords, setUsers } from '../redux/action';
  
// users 컬렉션에서 데이터 가져오기
export const fetchUsers = async (dispatch) => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const users = [];

      querySnapshot.forEach((doc) => {
        users.push({
          id: doc.id,
          ...doc.data(),
        });
      });
    dispatch(setUsers(users));
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

// records 컬렉션에서 데이터 가져오기
export const fetchRecords = async (dispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, "records"));
    const records = [];

    querySnapshot.forEach((doc) => {
      records.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    dispatch(setRecords(records));
  } catch (error) {
    console.error('Error fetching records:', error);
  }
};

// // comments 컬렉션에서 데이터 가져오기
export const fetchComments = async (dispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, "comments"));
    const comments = [];

    querySnapshot.forEach((doc) => {
      comments.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    dispatch(setUserComments(comments));
  } catch (error) {
    console.error('Error fetching comments:', error);
  }
};
