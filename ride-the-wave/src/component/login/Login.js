import React from 'react';
import styles from './Login.module.css';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';

function Login() {
    
    return (
        <div className={styles.Login}>
            <div>
                Login
            </div>
            <div className={styles.item_2}>2
                <div className={styles.item_3}>3
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                </div>
                <div className={styles.item_3}>3
                    <div className={styles.item_4}>4
                        {/* 이름 입력 박스가 들어갈 예정 */}
                        <div className={styles.item_5}>5 이름을 입력하세요
                        </div>
                        <div className={styles.item_5}>
                            <Link to="/myrecord"><span>5 버튼 + 이미지</span></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default Login;
