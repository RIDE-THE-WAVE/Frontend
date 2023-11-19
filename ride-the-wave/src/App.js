import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './component/common/Loading';
import { fetchComments, fetchDevelopedData, fetchRecords, fetchUsers } from './Firebase/fetchData';

// 전처리 때 하지 않고 필요할 때만 불러오기 때문에 현재 상황에서는 효과적이다.
const Login = lazy(() => import('./component/login/Login'));
const Comments = lazy(() => import('./component/comments/Comments'));
const GroupRecords = lazy(() => import('./component/records/grouprecords/GroupRecords'));
const MyRecord = lazy(() => import('./component/records/myrecord/MyRecord'));

function App() {
  const dispatch = useDispatch();

  console.log('App.js');
  useEffect(() => {
    const fetchData = async () => {
      await fetchUsers(dispatch);
      await fetchRecords(dispatch);
      await fetchComments(dispatch);
    }
    fetchData();
  }, []);
  
  const users = useSelector((state) => state.users);
  const records = useSelector((state) => state.records);

  useEffect(() => {
    const fetchData = async () => {
      await fetchDevelopedData(users, records, dispatch);
    }
    fetchData();
  }, [users, records]);

  return (
      <Router>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Login/> } />
              <Route path="/review" element={<Comments />} />
              <Route path="/grouprecords" element={<GroupRecords />} />
              <Route path="/myrecord" element={<MyRecord />} />
            </Routes>
          </Suspense>
      </Router>
  );
}

export default App;
