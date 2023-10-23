import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Login from "./component/login/Login";
// import Review from "./component/review/Review";
// import GroupRecords from "./component/records/grouprecords/GroupRecords";
// import MyRecord from "./component/records/myrecord/MyRecord";

const Login = lazy(() => import('./component/login/Login'));
const Review = lazy(() => import('./component/review/Review'));
const GroupRecords = lazy(() => import('./component/records/grouprecords/GroupRecords'));
const MyRecord = lazy(() => import('./component/records/myrecord/MyRecord'));

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/review" element={<Review />} />
            <Route path="/grouprecords" element={<GroupRecords />} />
            <Route path="/myrecord" element={<MyRecord />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

// import React, { Suspense } from 'react';

// const OtherComponent = React.lazy(() => import('./OtherComponent'));

// function MyComponent() {
//   return (
//     <div>
//       <Suspense fallback={<div>Loading...</div>}>
//         <OtherComponent />
//       </Suspense>
//     </div>
//   );
// }

// #469597
// #5BA199
// #BBC6C8
// #E5E3E4
// #DDBEAA

export default App;
