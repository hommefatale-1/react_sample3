import { Link } from 'react-router-dom';
import { useState, React} from 'react';


function Main() {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    const handleUserIdChange = (e) => {
        setUserId(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    async function fetchLogin() {
        try {
            const response = await fetch(`http://localhost:4000/userLogin.dox?userId=${userId}&password=${password}`);
            const jsonData = await response.json();
            console.log(jsonData);
            if (jsonData.result == "success") {
                sessionStorage.setItem('userId', userId);     // sessionStrorage에 저장
                alert("로그인이 되었습니다.");

            } else {
                alert("로그인에 실패 하셨습니다.");
            }
        } catch (error) {
            console.error("에러!");
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', minHeight: '100vh', alignItems: 'center' }}> {/* 반응형을 위해 minHeight 추가 */}
            <div style={{ width: '90%', maxWidth: '400px' }}> {/* 최대 너비를 400px로 설정 */}
                <div style={{ border: '1px solid', padding: '20px' }}> {/* 패딩 추가 */}
                    <div>
                        <img alt="인스타로고" style={{ width: '350px', height: '150px' }} src={process.env.PUBLIC_URL + '/images/gnstagram.png'}></img>
                    </div>
                    <div style={{ margin: '30px' }}></div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="전화번호, 사용자 이름 또는 이메일"
                                    onChange={handleUserIdChange}
                                    value={userId}
                                    style={{ borderRadius: '5px', width: '260px', height: '30px', margin: '5px', textAlign: 'center' }}
                                ></input>
                            </div>
                            <div>
                                <input
                                    type="password"
                                    placeholder="비밀번호"
                                    onChange={handlePasswordChange}
                                    value={password}
                                    style={{ borderRadius: '5px', width: '260px', height: '30px', margin: '5px', textAlign: 'center' }}
                                ></input>
                            </div>
                            <div style={{ padding: '5px' }}></div>
                            <div>
                                <button onClick={fetchLogin} style={{ color: 'white', borderRadius: '8px', width: '260px', height: '30px', margin: '5px', backgroundColor: '#0a7cff', opacity: '.7' }}>로그인</button>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', width: '100%', margin: '10px 0' }}>
                        <div style={{ flex: '1', borderTop: '1px solid black' }}></div>
                        <div style={{ margin: '0 10px' }}>또는</div>
                        <div style={{ flex: '1', borderTop: '1px solid black' }}></div>
                    </div>
                    <div style={{ padding: '10px' }}></div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                        <button style={{ fontStyle: 'inherit', color: '#385185', width: '260px', height: '30px', margin: '5px', border: 'none', background: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                            <img alt="구글로고" style={{ width: '20px', height: '20px' }} src={process.env.PUBLIC_URL + '/images/googlelogo.jpg'} />
                            Google 로그인
                        </button>
                    </div>
                    <div style={{ padding: '5px' }}></div>
                    <div>
                        <button style={{ paddingBottom: '15px', border: 'none', background: 'none', fontSize: '10px', textAlign: 'center', width: '100%' }}>비밀번호를 잊으셨나요?</button>
                    </div>
                </div>
                <div style={{ padding: '10px' }}></div>
                <div style={{ padding: '20px', textAlign: 'center', border: '1px solid black' }}>
                    <span>계정이 없으신가요?</span>
                    <Link to="/join">
                        <button style={{ color: 'blue', border: 'none', background: 'none' }}>가입하기</button>
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

export default Main