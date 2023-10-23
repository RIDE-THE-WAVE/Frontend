import React from 'react';

function Review() {
    const divOneStyle = {
        width: '100%',
        height: '900px',
        backgroundColor: '#E5E3E4',
        color: 'white', 
    };
    const divTwoStyle = {
        width: '100%',
        height: '500px',
        backgroundColor: '#5BA199',
        color: 'white', 
    };
    const divThreeStyle = {
        width: '100%',
        height: '200px',
        backgroundColor: '#BBC6C8',
        color: 'white', 
    };
    const divFourStyle = {
        width: '100%',
        height: '400px',
        backgroundColor: '#888888',
        color: 'white',
    };
    const divFiveStyle = {
        width: '100%',
        height: '200px',
        backgroundColor: '#111111',
        color: 'white',
    };
  return (
    <div className="Review" style={divOneStyle}>
      <h1>Review</h1>
    </div>
  );
}

export default Review;
