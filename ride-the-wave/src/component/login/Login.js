import React, { useState } from 'react';
import styles from './Login.module.css';
import logo from '../img/logo.png';
import search_client from '../img/search_client.png';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const isUsernameValid = (username) => username.trim() !== "";
    const handleLogin = () => {
        if (isUsernameValid(username)) {
            console.log(username);
            navigate('/myrecord', { state: 'myrecord'});
        } else {
            console.log("이름을 입력하세요.");
        }
    }
    const handleLoginByEnter = (e) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    }
    
    return (
        <div className={styles.Login}>
            <div></div>
            <div className={styles.center_box}>
                <div className={styles.center_top_inner_box}>
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                </div>
                <div className={styles.center_bottom_inner_box}>
                    <div className={styles.search_box}>
                        <div className={styles.put_search_data_section}>
                            <div></div>
                            <div className={styles.input_box}>
                                <input
                                    type="text"
                                    placeholder="이름을 입력하세요."
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    onKeyUp={handleLoginByEnter} />
                            </div>
                            <div className={styles.search_img} onClick={handleLogin}>
                                <img src={search_client} alt="search_client"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default Login;
