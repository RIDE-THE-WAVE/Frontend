import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchDevelopedData, fetchRecords, fetchUsers, fetchUsersRecords } from './Firebase/fetchData';
import Waiting from './component/common/Waiting';

// 전처리 때 하지 않고 필요할 때만 불러오기 때문에 현재 상황에서는 효과적이다.
const Loading = lazy(() => import('./component/loading/Loading'));
const Login = lazy(() => import('./component/login/Login'));
const Comments = lazy(() => import('./component/comments/Comments'));
const GroupRecords = lazy(() => import('./component/records/grouprecords/GroupRecords'));
const MyRecord = lazy(() => import('./component/records/myrecord/MyRecord'));
const SetData = lazy(() => import('./component/setdata/setData'));

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchData = () => {
      const storedData = localStorage.getItem('persist:root');
      if (!storedData) {
        fetchUsers(dispatch);
        fetchRecords(dispatch);
      }
    }
    fetchData();
  }, [dispatch]);
  
  const users = useSelector((state) => state.users);
  const records = useSelector((state) => state.records);
  
  useEffect(() => {
    const fetchData = () => {
      const storedData = localStorage.getItem('persist:root');
      if (storedData) {
        console.log('users 업데이트');
        fetchDevelopedData(users, dispatch);
      }
    }
    fetchData();
  }, [users]);

  useEffect(() => {
    const fetchData = () => {
      const storedData = localStorage.getItem('persist:root');
      if (storedData) {
        fetchUsersRecords(users, records, dispatch);
      }
    }
    fetchData();
  }, [records]);

  return (
      <Suspense fallback={<Waiting />}>
        <Router>
            <Routes>
              <Route path="/" element={<Loading />} />
              <Route path="/login" element={<Login />} />
              <Route path="/review" element={<Comments />} />
              <Route path="/grouprecords" element={<GroupRecords />} />
              <Route path="/myrecord" element={<MyRecord />} />
              <Route path="/setdata" element={<SetData />} />
            </Routes>
        </Router>
      </Suspense>
  );
}

export default App;
