import db from './Firebase';
import { collection, getDocs } from 'firebase/firestore';
import { setUserComments, setRecords, setUsers, setDevelopData } from '../redux/action';
  
// users 컬렉션에서 데이터 가져오기
export const fetchUsers = async (dispatch) => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const users = [];

      for (const userDoc of querySnapshot.docs) {
        const userData = userDoc.data();

        const querySubSnapShot = await getDocs(collection(db, "users", userDoc.id, "records_display_option"));
        const records_display_option = [];

        querySubSnapShot.forEach((doc) => {
          records_display_option.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        const user = {
          id: userDoc.id,
          ...userData,
          "records_display_option": records_display_option,
        };
        users.push(user);
      }
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

    for (const recordDoc of querySnapshot.docs) {
      const recordData = recordDoc.data();

      // 이 부분 건드려볼 필요가 있다.
      const queryFreestyleSnapShot = await getDocs(collection(db, "records", recordDoc.id, "freestyle"));
      const freestyle = [];

      queryFreestyleSnapShot.forEach((doc) => {
        freestyle.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      const queryBackstrokeSnapShot = await getDocs(collection(db, "records", recordDoc.id, "backstroke"));
      const backstroke = [];

      queryBackstrokeSnapShot.forEach((doc) => {
        backstroke.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      const record = {
        id: recordDoc.id,
        ...recordData,
        "freestyle": freestyle,
        "backstroke": backstroke,
      };
      records.push(record);
    }
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

export const fetchDevelopedData = async (users, records, dispatch) => {
  try {    
    const developedData = [];
    if (Array.isArray(users)) {
        users.forEach((user) => {
            const temp = {};
            temp.id = user.id;
            temp.user = user.user;
            temp.name = user.name;
            temp.term = user.term;
            temp.class = user.class;
            temp.records_display_option = user.records_display_option;
            if (Array.isArray(records)) {
                records.find((record) => {
                    if (record.id === user.user) {
                        temp.freestyle = record.freestyle;
                        temp.backstroke = record.backstroke;
                    }
                });
            }
            developedData.push(temp);
        });
    }
    developedData.current_user_data = "";
    developedData.current_user = "";
    developedData.auth = false;    
    await dispatch(setDevelopData(developedData));
  } catch (error) {
    console.error('Error fetching developed data:', error);
  }
};
