import React from 'react';

function Review() {
    const divStyle = {
        backgroundColor: '#0000FF', // 원하는 배경색
        color: 'white', // 텍스트 색상 (옵션)
        // 다른 스타일 속성 추가 가능
      };
  // 컴포넌트의 내용
  return (
    <div className="Review" style={divStyle}>
      <h1>Review</h1>
    </div>
  );
}

export default Review;
