import React, { useState } from 'react';
import {
  collection,
  addDoc,
  setDoc,
  doc,
} from 'firebase/firestore';
import db from '../../Firebase/Firebase';

const SetData = () => {
  const [userData, setUserData] = useState({
    class: '',
    id: '',
    name: '',
    term: '',
    user: '',
  });

  const [userRecordData, setUserRecordData] = useState({
    side_25: '',
    side_50: '',
    flip_25: '',
    flip_50: '',
    fin_25: '',
    fin_50: '',
    start_25: '',
    start_50: '',
  });

  // const [isDataUploaded, setIsDataUploaded] = useState(false);

  const handleUserInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleRecordInputChange = (e) => {
    const { name, value } = e.target;
    setUserRecordData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const addUserData = async () => {
    try {
      userData.class = Number(userData.class);
      userData.id = Number(userData.id);
      userData.term = Number(userData.term);
      
      // users 컬렉션에 데이터 추가
      // const userDocRef = await addDoc(collection(db, 'users'), userData);
      const userDocRef = await doc(db, 'users', userData.user);
      await setDoc(userDocRef, userData);
      // records_display_option 서브컬렉션에 데이터 추가
      await addDoc(collection(userDocRef, 'records_display_option'), {
        backstroke: {
          fin: true,
          flip: true,
          side: true,
          start: true,
        },
        freestyle: {
          fin: true,
          flip: true,
          side: true,
          start: true,
        },
      });

      // records 컬렉션에 데이터 추가
      const recordDocRef = await doc(db, 'records', userData.user);
      await setDoc(recordDocRef,{});
      await addDoc(collection(recordDocRef, 'freestyle'), userRecordData);

      console.log('Data added successfully!');
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  const handleUploadData = () => {
    addUserData();
    // setIsDataUploaded(true);
  };

  return (
    <div>
      <label>
        Class:
        <input
          type="text"
          name="class"
          value={userData.class}
          onChange={handleUserInputChange}
        />
      </label>
      <br />
      <label>
        ID:
        <input
          type="text"
          name="id"
          value={userData.id}
          onChange={handleUserInputChange}
        />
      </label>
      <br />
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleUserInputChange}
        />
      </label>
      <br />
      <label>
        Term:
        <input
          type="text"
          name="term"
          value={userData.term}
          onChange={handleUserInputChange}
        />
      </label>
      <br />
      <label>
        User:
        <input
          type="text"
          name="user"
          value={userData.user}
          onChange={handleUserInputChange}
        />
      </label>
      <br />
        <label>
            Side 25:
            <input
            type="text"
            name="side_25"
            value={userRecordData.side_25}
            onChange={handleRecordInputChange}
            />
        </label>
        <br />
        <label>
            Side 50:
            <input
            type="text"
            name="side_50"
            value={userRecordData.side_50}
            onChange={handleRecordInputChange}
            />
        </label>
        <br />
        <label>
            Flip 25:
            <input
            type="text"
            name="flip_25"
            value={userRecordData.flip_25}
            onChange={handleRecordInputChange}
            />
        </label>
        <br />
        <label>
            Flip 50:
            <input
            type="text"
            name="flip_50"
            value={userRecordData.flip_50}
            onChange={handleRecordInputChange}
            />
        </label>
        <br />
        <label>
            Fin 25:
            <input
            type="text"
            name="fin_25"
            value={userRecordData.fin_25}
            onChange={handleRecordInputChange}
            />
        </label>
        <br />
        <label>
            Fin 50:
            <input
            type="text"
            name="fin_50"
            value={userRecordData.fin_50}
            onChange={handleRecordInputChange}
            />
        </label>
        <br />
        <label>
            Start 25:
            <input
            type="text"
            name="start_25"
            value={userRecordData.start_25}
            onChange={handleRecordInputChange}
            />
        </label>
        <br />
        <label>
            Start 50:
            <input
            type="text"
            name="start_50"
            value={userRecordData.start_50}
            onChange={handleRecordInputChange}
            />
        </label>
        <br />
        <br />

      {/* <button onClick={handleUploadData} disabled={isDataUploaded}> */}
      <button onClick={handleUploadData}>
        Upload Data to Firestore
      </button>
    </div>
  );
};

export default SetData;
