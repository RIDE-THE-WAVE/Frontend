import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchComments, fetchDevelopedData, fetchRecords, fetchUsers } from './Firebase/fetchData';

// 전처리 때 하지 않고 필요할 때만 불러오기 때문에 현재 상황에서는 효과적이다.
const Waiting = lazy(() => import('./component/common/Waiting'));
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
      fetchUsers(dispatch);
      fetchRecords(dispatch);
      // fetchComments(dispatch);
    }
    fetchData();
  }, []);
  
  const users = useSelector((state) => state.users);
  const records = useSelector((state) => state.records);

  useEffect(() => {
    const fetchData = () => {
      fetchDevelopedData(users, records, dispatch);
    }
    fetchData();
  }, [users, records]);

  return (
      <Router>
          <Suspense fallback={<Waiting />}>
            <Routes>
              <Route path="/" element={<Loading />} />
              <Route path="/login" element={<Login />} />
              <Route path="/review" element={<Comments />} />
              <Route path="/grouprecords" element={<GroupRecords />} />
              <Route path="/myrecord" element={<MyRecord />} />
              <Route path="/setdata" element={<SetData />} />
            </Routes>
          </Suspense>
      </Router>
  );
}

export default App;
