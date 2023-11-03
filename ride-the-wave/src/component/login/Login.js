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
            navigate('/myrecord');
        } else {
            console.log("이름을 입력하세요.");
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
                        {/* 이름 입력 박스가 들어갈 예정 */}
                        <div className={styles.put_search_data_section}>
                            <div></div>
                            <input type="text" placeholder="이름을 입력하세요." value={username} onChange={(e) => setUsername(e.target.value)} />
                            {/* <span>이름을 입력하세요.</span> */}
                            <div onClick={handleLogin}>
                                <div className={styles.search_img}>
                                    {/* 버튼 클릭하면 회원 정보 확인 및 권한 부여 후 다음 페이지로 넘어가는 기능 구현 */}
                                    <img src={search_client} alt="search_client"/>
                                </div>
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
