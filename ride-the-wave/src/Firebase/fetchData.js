import db from './Firebase';
import { setUsers } from '../redux/action';
// import { setUserComments, setRecords, setUsers } from '../redux/action';
  
// users 컬렉션에서 데이터 가져오기
export const fetchUsers = async (dispatch) => {
    console.log('여기에 도착하는가?');
    try {
      const usersRef = collection(db, 'users');
      console.log('여기에 도착하는가??'); 
      const snapshot = await usersRef.get();
      
      const users = [];
      snapshot.forEach((doc) => {
        users.push({
          id: doc.id,
          ...doc.data(),
      });
    });

    // users을 Redux 스토어에 저장
    dispatch(setUsers(users));
    // dispatch({ type: 'SET_USERS', payload: users });
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

// records 컬렉션에서 데이터 가져오기
// export const fetchRecords = async (dispatch) => {
//   try {
//     const recordsRef = db.collection('records');
//     const snapshot = await recordsRef.get();

//     const records = [];
//     snapshot.forEach((doc) => {
//       records.push({
//         id: doc.id,
//         ...doc.data(),
//       });
//     });

//     // records을 Redux 스토어에 저장
//     dispatch(setRecords(records));
//     // dispatch({ type: 'SET_RECORDS', payload: records });
//   } catch (error) {
//     console.error('Error fetching records:', error);
//   }
// };

// // comments 컬렉션에서 데이터 가져오기
// export const fetchComments = async (dispatch) => {
//   try {
//     const commentsRef = db.collection('comments');
//     const snapshot = await commentsRef.get();

//     const comments = [];
//     snapshot.forEach((doc) => {
//       comments.push({
//         id: doc.id,
//         ...doc.data(),
//       });
//     });

//     // comments를 Redux 스토어에 저장
//     dispatch(setUserComments(comments));
//     // dispatch({ type: 'SET_COMMENTS', payload: comments });
//   } catch (error) {
//     console.error('Error fetching comments:', error);
//   }
// };
