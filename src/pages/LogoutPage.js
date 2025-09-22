import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config/config";

function App() {
    const navigate = useNavigate();

    useEffect(() => {

        const url = `${API_BASE_URL}/member/logout`;


        axios.post(url)
            .then(() => {

                localStorage.removeItem('user');
                console.log('로그아웃 성공');
                navigate(`/member/login`);
            })
            .catch((error) => {
                console.log('로그아웃 실패', error)
            });

    }, []);

    return (
        <>
            메뉴 아이템
        </>
    );
}

export default App;