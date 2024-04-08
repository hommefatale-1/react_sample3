import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ReProfile() {
    const [Reprofile, setReprofile] = useState({});
    useEffect(() => {
        async function fetchProfile() {
            try {
                const response = await fetch(`http://localhost:4000/profile.dox?userId=test`);
                const jsonData = await response.json();
                setReprofile(jsonData);
                console.log(jsonData);
            } catch (error) {
                console.error("에러!");
            }
        }
        fetchProfile();
    }, []);
    return (<div>
        <div>
            {/* 이동 */}
            <div>

            </div>
            {/* 왼쪽사이드바 */}
            <div>
                <div style={{ border: '1px solid red', overflowY: 'auto', width: '330px', height: '500px' }}>
                    <div>
                        <h1>설정</h1>
                    </div>
                    <div style={{ border: '1px solid black' }}>
                        <a href='#'>
                            <div>
                                <img style={{}} src={process.env.PUBLIC_URL + '/images/'} alt=''></img>
                                <strong>Mata</strong>
                            </div>
                        </a>
                        <div>
                            <h2>계정센터</h2>
                        </div>
                        <div>
                            <small>Meta 테크놀로지에서 연결된 환경 및 계정 설정을 관리해보세요.</small>
                        </div>
                        <div>
                            <img src=''></img>
                            <small>개인 정보</small>
                        </div>
                        <div>
                            <img src=''></img>
                            <small>비밀번호 및 보완</small>
                        </div>
                        <div>
                            <img src=''></img>
                            <small>광고 기본 설정</small>
                        </div>
                        <div style={{ color: 'blue' }}>
                            <a href=""><strong>계정 센터에서 더 보기</strong></a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <small>내 Instagram사용 방식</small>
                            <div>
                                <a href="#">
                                    <img src={process.env.PUBLIC_URL + '/images/'}></img>
                                    <span>프로필 편집</span>
                                </a>
                            </div>
                            <div>
                                <a href='#'>
                                    <img src={process.env.PUBLIC_URL + '/images/'}></img>
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
            <div>

            </div>
        </div>
    </div>)
}
export default ReProfile