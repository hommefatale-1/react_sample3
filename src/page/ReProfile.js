import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ReProfile() {
    const [user, setUser] = useState({});
    const [userProfilePic, setUserProfilePic] = useState(null);

    // 버튼 클릭 시 이미지 파일 선택
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setUserProfilePic(reader.result); // 이미지 데이터를 상태에 설정
        };
        reader.readAsDataURL(file); // 파일을 읽어 Base64 형식의 URL로 변환
        console.log(reader);
    };


    useEffect(() => {
        async function fetchProfile() {
            try {
                const response = await fetch(`http://localhost:4000/profile.dox?userId=test`);
                if (!response.ok) {
                    throw new Error('서버 응답이 올바르지 않습니다.');
                }
                const jsonData = await response.json();
                setUser(jsonData);
                console.log(jsonData);
            } catch (error) {
                console.error("에러!", error);
            }
        }
        fetchProfile();
    }, []);
    return (<div>
        <div style={{ display: 'flex' }}>
            {/* 왼쪽사이드바 */}
            <div>
                <div style={{ position: 'relative', backgroundColor: 'rgba(128,128,128,0.1)', border: '1px solid red', overflowY: 'auto', width: '300px', height: '1000px' }}>
                    <div>
                        <h1>설정</h1>
                    </div>
                    <div style={{ boxShadow: '0px 0px 24px 0px', backgroundColor: 'white', border: '1px solid black', transition: 'box-shadow 0.3s, background-color 0.3s' }}>
                        <a href='#'>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img style={{ width: '20px', height: '20px', marginRight: '10px' }} src={process.env.PUBLIC_URL + '/images/ribbon.png'} alt=''></img>
                                <strong>Mata</strong>
                            </div>
                        </a>
                        <div>
                            <h2>계정센터</h2>
                        </div>
                        <div>
                            <small>Meta 테크놀로지에서 연결된 환경 및 계정 설정을 관리해보세요.</small>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img style={{ width: '16px', height: '16px', marginRight: '5px' }} src={process.env.PUBLIC_URL + '/images/user.png'}></img>
                            <small>개인 정보</small>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img style={{ width: '16px', height: '16px', marginRight: '5px' }} src={process.env.PUBLIC_URL + '/images/security1.png'}></img>
                            <small>비밀번호 및 보완</small>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img style={{ width: '16px', height: '16px', marginRight: '5px' }} src={process.env.PUBLIC_URL + '/images/ads.png'}></img>
                            <small>광고 기본 설정</small>
                        </div>
                        <div style={{ color: 'blue', transition: 'color 0.3s' }}>
                            <a href="" style={{ textDecoration: 'none', fontSize: '12px' }}><strong>계정 센터에서 더 보기</strong></a>
                        </div>
                    </div>

                    <div>
                        <div>
                            <small>내 Instagram사용 방식</small>
                            <div>
                                <a href="#">
                                    <img style={{ width: '24px', height: '24px', marginRight: '10px' }} src={process.env.PUBLIC_URL + '/images/user1.png'}></img>
                                    <span>프로필 편집</span>
                                </a>
                            </div>
                            <div>
                                <a href='#'>
                                    <img style={{ width: '24px', height: '24px', marginRight: '10px' }} src={process.env.PUBLIC_URL + '/images/notification.png'}></img>
                                    <span>알림</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <small>내가 볼 수 있는 내용</small>
                        <div>
                            <a href="#">
                                <img src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span>업데이트를 보지 않도록 설정한 계정</span>
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span>좋아요 수 및 공유 수</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <small>내 콘텐츠를 볼 수 있는 사람</small>
                        <div>
                            <a href="#">
                                <img src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span>계정 공개 범위</span>
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span>친한 친구</span>
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span>차단된 계정</span>
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span>스토리 및 라이브 방송 숨기기</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <small>다른 사람이 나와 소통할 수 있는 방법</small>
                        <div>
                            <a href="#">
                                <img src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span>메시지 및 스토리 답장</span>
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span>태그 및 언급</span>
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span>댓글</span>
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span>공유 및 리믹스</span>
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span>제한된 계정</span>
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span>숨겨진 단어</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <small>내 앱 및 미디어</small>
                        <div>
                            <a href="#">
                                <img src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span>보관 및 다운로드</span>
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span>언어</span>
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span>웹사이트 권한</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <small>가족</small>
                        <div>
                            <a href="#">
                                <img src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span>관리 감독</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <small>프로페셔널</small>
                        <div>
                            <a href="#">
                                <img src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span>계정 유형 및 도구</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <small>더 많은 정보 및 지원</small>
                        <div>
                            <a href="#">
                                <img src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span>도움말</span>
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span>계정 상태</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* 오른쪽 여백 */}
            <div style={{ width: '350px', border: '1px solid black', display: 'flex', justifyContent: 'center' }}>
                <div style={{ alignItems: 'center', display: 'flex', background: 'rgba(128, 128,128, 0.1)', width: '300px', height: '100px', border: '1px solid black', margin: '10px', borderRadius: '5%' }}>
                    <div style={{ border: '1px solid black', width: '100px', height: '80px', borderRadius: '50%', marginRight: '10px' }}>
                        {/* 이미지가 선택되었다면 해당 이미지를 표시 */}
                        {userProfilePic && <img src={userProfilePic} alt="Profile Pic" style={{ borderRadius: '50%', width: '100%', height: '100%', marginRight: '5px' }} />}
                    </div>
                    <div style={{ width: '100px', marginRight: '20px' }}>
                        <div>{Array.isArray(user) ? user[0].userId : user.userId}</div>
                        <div>{Array.isArray(user) ? new Date(user[0].updated_at).toLocaleDateString() + " " + new Date(user[0].updated_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : new Date(user.updated_at).toLocaleDateString() + " " + new Date(user.updated_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                    </div>
                    <div style={{ width: '20px' }}>
                        {/* 파일 선택 버튼 */}
                        <input type="file" accept="image/*" onChange={handleImageUpload} style={{ width: '70px',display: 'inline-block' }} id="profilePicInput" />
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default ReProfile