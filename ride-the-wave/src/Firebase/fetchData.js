import db from './Firebase';
import { collection, getDocs } from 'firebase/firestore';
import { setUserComments,
         setRecords,
         setUsers,
         setDevelopData,
         setUsersRecordsDisplayOption,
         setCurrentUserRecordsDisplayOption,
         setDevelopedDataRecords,
        } from '../redux/action';
  
// users 컬렉션에서 데이터 가져오기
export const fetchUsers = async (dispatch) => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const users = [];

      for (const userDoc of querySnapshot.docs) {
        const userData = userDoc.data();

        const records_display_option = [];
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

// 전체 유저의 records 설정
export const fetchUsersRecords = async (users, records, dispatch) => {
  try {
    for (let i = 0; i < users.length; i++) {
      dispatch(setDevelopedDataRecords({
          id: users[i].id,
          record: records[i]?.freestyle,
      }));
    }
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

// 전체 유저의 records_display_option 설정
export const fetchUsersRecordsDisplayOption = async (usersData, dispatch) => {
  try {
    usersData.map(async (userData) => {
      const docSnap = await getDocs(collection(db, "users", userData.user, "records_display_option"));
      const records_display_option = docSnap.docs.map((doc) => doc.data());
      dispatch(setUsersRecordsDisplayOption({
        id: userData.id,
        records_display_option
      }));
    });
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

// 현제 유저의 records_display_option 설정
export const fetchCurrentUserRecordsDisplayOption = async (developedData, dispatch) => {
  try {
    console.log('여기');
    const docSnap = await getDocs(collection(db, "users", developedData.current_user_data.user, "records_display_option"));
    const records_display_option = docSnap.docs.map((doc) => doc.data());
    dispatch(setCurrentUserRecordsDisplayOption({
      id: docSnap.id,
      records_display_option
    }));
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

      const freestyle = [];
      // 이 부분 건드려볼 필요가 있다.
      const queryFreestyleSnapShot = await getDocs(collection(db, "records", recordDoc.id, "freestyle"));

      queryFreestyleSnapShot.forEach((doc) => {
        freestyle.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      const record = {
        id: recordDoc.id,
        ...recordData,
        "freestyle": freestyle,
      };
      records.push(record);
    }
    dispatch(setRecords(records));
  } catch (error) {
    console.error('Error fetching records:', error);
  }
};

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

// export const fetchDevelopedData = async (users, records, dispatch) => {
  export const fetchDevelopedData = async (users, dispatch) => {
  try {    
    const developedData = [];
    developedData.users = [];
    if (Array.isArray(users)) {
        users.forEach((user) => {
            const temp = {};
            temp.id = user.id;
            temp.user = user.user;
            temp.name = user.name;
            temp.term = user.term;
            temp.class = user.class;
            temp.records_display_option = user.records_display_option;
            temp.freestyle = [];
            // if (Array.isArray(records)) {
            //     records.find((record) => {
            //         if (record.id === user.user) {
            //             temp.freestyle = record.freestyle;
            //             return true;
            //         }
            //     });
            // }
            developedData.users.push(temp);
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