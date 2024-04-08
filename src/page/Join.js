import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';



function Join() {
    const [userData, setUserData] = useState({ userId: "", password: "", userName: "", email: "", phoneNumber: "" });
    const navigate = useNavigate(); // useNavigate 훅을 바로 사용합니다.
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };
    async function fnIdCheck(userId) {
        try {
            const response = await fetch(`http://localhost:4000/idCheck.dox?userId=${userData.userId}`);
            const jsonData = await response.json();
            console.log(jsonData);
            if (jsonData.result == "success") {
                alert("사용가능한 아이디 입니다.");
            } else {
                alert("이미 있는 아이디 입니다.");
                setUserData({ ...userData, userId: "" });
            }
        } catch (error) {
            console.error("에러!");
        }
    };
    async function fnSave() {
        try {
            const userDataSend = {
                userId: userData.userId,
                password: userData.password,
                userName: userData.userName,
                email: userData.email,
                phoneNumber: userData.phoneNumber
            };
            const response = await fetch(`http://localhost:4000/userSave.dox`, {
                method: 'POST', // 수정: POST 메소드 사용
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userDataSend)
            });
            console.log(userDataSend);
            const jsonData = await response.json();
            if (jsonData.result = "success") {
                alert(userData.userName + '님 가입을 환영합니다');
                navigate('/');

            } else {
                alert("회원가입에 실패하셨습니다. 관리자에게 문의 바랍니다");
            }
        } catch (error) {
            console.error("에러!");
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', minHeight: '100vh', alignItems: 'center' }}>
            <div style={{ width: '90%', maxWidth: '450px' }}>
                <div style={{ border: '1px solid black', width: '450px', height: '550px' }}>
                    <div>
                        <img alt="인스타로고" style={{ padding: '5px',width: '448px', height: '150px' }} src={process.env.PUBLIC_URL + '/images/gnstagram.png'}></img>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                        <span style={{ margin: '5px', textAlign: 'center', color: 'rgb(115, 115, 115)' }}>친구들의 사진과 동영상을 보려면 가입하세요</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                        <button style={{ fontStyle: 'inherit', color: '#385185', width: '260px', height: '30px', margin: '5px', border: '1px solid black', background: "none", borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                            <img alt="구글로고" style={{ width: '20px', height: '20px' }} src={process.env.PUBLIC_URL + '/images/Googlelogo.jpg'} />
                            Google 로그인
                        </button>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', width: '100%', margin: '10px 0' }}>
                        <div style={{ flex: '1', borderTop: '1px solid black' }}></div>
                        <div style={{ margin: '0 10px' }}>또는</div>
                        <div style={{ flex: '1', borderTop: '1px solid black' }}></div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                placeholder="사용자 아이디"
                                type="text"
                                name="userId"
                                value={userData.userId}
                                onChange={handleChange}
                                style={{ backgroundColor: "rgb(240, 240, 240)", borderRadius: '5px', width: '260px', height: '30px', margin: '5px', textAlign: 'left' }}
                            ></input>
                        </div>
                        <button onClick={() => fnIdCheck(userData.userId)} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', border: "none", fontSize: "15px" }}>중복확인</button>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <input
                            placeholder="사용자 비밀번호"
                            type="text"
                            name="password"
                            value={userData.password}
                            onChange={handleChange}
                            style={{ backgroundColor: "rgb(240, 240, 240)", borderRadius: '5px', width: '260px', height: '30px', margin: '5px', textAlign: 'left' }}
                        ></input>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <input
                            placeholder="사용자 이름"
                            type="text"
                            name="userName"
                            value={userData.userName}
                            onChange={handleChange}
                            style={{ backgroundColor: "rgb(240, 240, 240)", borderRadius: '5px', width: '260px', height: '30px', margin: '5px', textAlign: 'left' }}
                        ></input>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <input
                            placeholder="사용자 전화번호"
                            type="text"
                            name="phoneNumber"
                            value={userData.phoneNumber}
                            onChange={handleChange}
                            style={{ backgroundColor: "rgb(240, 240, 240)", borderRadius: '5px', width: '260px', height: '30px', margin: '5px', textAlign: 'left' }}
                        ></input>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <input
                            placeholder="사용자 이메일"
                            type="text"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            style={{ backgroundColor: "rgb(240, 240, 240)", borderRadius: '5px', width: '260px', height: '30px', margin: '5px', textAlign: 'left' }}
                        ></input>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button onClick={fnSave} style={{ color: 'white', backgroundColor: "rgb(100, 150, 230)", borderRadius: '5px', width: '260px', height: '30px', margin: '5px', }}>회원가입</button>
                    </div>
                </div>
                <div style={{ padding: '10px' }}></div>
                <div style={{ padding: '20px', textAlign: 'center', border: '1px solid black' }}>
                    <span>계정이 있으신가요?</span>
                    <Link to="/Main">
                        <button style={{ fontStyle: "inherit", color: 'blue', border: 'none', background: 'none' }}>로그인하기</button>
                    </Link>
                </div>
                <div style={{ padding: '5px' }}></div>
                <div style={{ textAlign: 'center' }}>
                    <div>앱을 다운로드 하세요</div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                        <a href="#"><img style={{ width: '130px', height: '40px' }} src={process.env.PUBLIC_URL + '/images/googlePlay.png'} alt="Image 1"></img></a>
                        <a href="#"><img style={{ width: '110px', height: '40px' }} src={process.env.PUBLIC_URL + '/images/Microsoft.png'} alt="Image 2"></img></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Join