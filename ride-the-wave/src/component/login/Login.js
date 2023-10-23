import React from 'react';

function Login() {
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
        <div className="Login" style={divOneStyle}>
            <h1>Login</h1>
            <div className="divTwo" style={divTwoStyle}>
                <div className="divThree" style={divThreeStyle}>
                    위
                    <br />
                    img
                </div>
                <div className="divThree" style={divThreeStyle}>
                    아래
                    <br />
                    <div className="divFour" style={divFourStyle}>
                        <div className="divFive" style={divFiveStyle}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
