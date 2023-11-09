import React, { useCallback, useEffect, useState } from 'react';
import styles from './Login.module.css';
import logo from '../img/logo.png';
import search_client from '../img/search_client.png';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';

function Login() {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const developDataFunc = useCallback((users, records) => {
        const developData = [];
        if (Array.isArray(users)) {
            users.forEach((user) => {
                const temp = {};
                temp.id = user.id;
                temp.user = user.user;
                temp.name = user.name;
                temp.term = user.term;
                temp.class = user.class;
                temp.records_display_option = user.records_display_option;
                if (Array.isArray(records)) {
                    records.find((record) => {
                        if (record.id === user.user) {
                            temp.freestyle = record.freestyle;
                            temp.backstroke = record.backstroke;
                        }
                    });
                }
                developData.push(temp);
            });
        }
        developData.current_user = "";
        developData.own_record = [];
        developData.auth = false;
        return developData;
    }, []);

    // 데이터 가공
    const developData = developDataFunc(useSelector((state) => state.users), useSelector((state) => state.records));

    const isUsernameValid = (username, data) => {
        if (data.some((user) => user.name === username)) {
            return true;
        }
        return false;
    }

    const handleLogin = () => {
        if (isUsernameValid(username, developData)) {
            developData.forEach((data) => {
                if (data.name === username) {
                    developData.own_record.push(data.freestyle);
                    developData.own_record.push(data.backstroke);
                }
            });
            developData.auth = true;
        } else {
            developData.auth = false;
        }
        developData.current_user = username;
        navigate('/myrecord', { state: { username: username, data: developData }});
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
