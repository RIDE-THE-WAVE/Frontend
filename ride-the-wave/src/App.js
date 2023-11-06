import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './component/common/Loading';

// 전처리 때 하지 않고 필요할 때만 불러오기 때문에 현재 상황에서는 효과적이다.
const Login = lazy(() => import('./component/login/Login'));
const Review = lazy(() => import('./component/review/Review'));
const GroupRecords = lazy(() => import('./component/records/grouprecords/GroupRecords'));
const MyRecord = lazy(() => import('./component/records/myrecord/MyRecord'));

function App() {
  return (
    <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/review" element={<Review />} />
            <Route path="/grouprecords" element={<GroupRecords />} />
            <Route path="/myrecord" element={<MyRecord />} />
          </Routes>
        </Suspense>
    </Router>
  );
}

export default App;
