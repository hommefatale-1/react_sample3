import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ReProfile() {
    const sessionId = sessionStorage.getItem("userId");

    const [user, setUser] = useState({});
    const [userProfilePic, setUserProfilePic] = useState(null);
    const [countries, setCountries] = useState([]);
    const [website, setWebsite] = useState('');
    const [bio, setBio] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const navigate = useNavigate();

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
    // 웹사이트 작성
    const handleWebsite = (e) => {
        setWebsite(e.target.value);
        console.log(website);
    };
    const handleBio = (e) => {
        setBio(e.target.value);
        console.log(bio);
    };
    //국가 선택한 정보 가져오기
    const handleCountry = (e) => {
        const selectedCountryCode = e.target.value; // 선택된 국가 코드
        const selectedCountry = countries.find(country => country.code === selectedCountryCode); // 선택된 국가 정보
        setSelectedCountry(selectedCountry.name); // 선택된 국가 정보 출력 또는 다른 작업 수행
        console.log(selectedCountry);
    };
    //유저 정보 가져오기
    useEffect(() => {
        console.log(sessionId);
        async function fetchProfile() {
            try {
                const response = await fetch(`http://localhost:4000/profile.dox?userId=${sessionId}`);
                const jsonData = await response.json();
                setUser(jsonData);
                console.log(jsonData);
            } catch (error) {
                console.error("에러!", error);
            }
        }
        fetchProfile();
    }, []);
    //국가 데이터 정보가져오기
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                // API에서 가져온 데이터에서 각 국가의 이름과 코드를 추출하여 배열로 저장
                const countryData = data.map(country => ({
                    name: country.name.common,
                    code: country.cca2
                }));
                setCountries(countryData);
            })
            .catch(error => console.error('Error fetching countries:', error));
    }, []);

    async function updateProfile() {
        try {
            let profileData = {
                userId: user[0].userId,
                profile_pic: userProfilePic, // 이미지 데이터 추가
                bio: bio,
                country: selectedCountry,
                website: website
            };

            const response = await fetch('http://localhost:4000/updateProfile.dox', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(profileData)
            });
            console.log(profileData);
            const data = await response.json();
            console.log(data);
            if (data.result === "success") {
                alert("수정되었습니다.");
                navigate('/Profile');
            }
        } catch (error) {
            console.error('프로필 업데이트 중 오류 발생:', error);
        }
    }

    return (<div>
        <div style={{ display: 'flex' }}>
            {/* 왼쪽사이드바 */}
            <div>
                <div style={{ position: 'relative', backgroundColor: 'rgba(128,128,128,0.1)', border: '1px solid red', overflowY: 'auto', width: '300px', height: '1000px' }}>
                    <div>
                        <h1>설정</h1>
                    </div>
                    <div style={{ margin: '10px', boxShadow: '0px 0px 24px 0px', backgroundColor: 'white', border: '1px solid black', transition: 'box-shadow 0.3s, background-color 0.3s' }}>
                        <a style={{ textDecoration: 'none' }} href='#'>
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
                        <div style={{ padding: '10px' }}>
                            <small>내 Instagram사용 방식</small>
                            <div>
                                <a style={{ textDecoration: 'none' }} href="#">
                                    <img style={{ width: '24px', height: '24px', marginRight: '5px' }} src={process.env.PUBLIC_URL + '/images/user1.png'}></img>
                                    <span style={{ color: 'black', fontSize: '15px' }}>프로필 편집</span>
                                </a>
                            </div>
                            <div>
                                <a style={{ textDecoration: 'none' }} href='#'>
                                    <img style={{ width: '24px', height: '24px', marginRight: '5px' }} src={process.env.PUBLIC_URL + '/images/notification.png'}></img>
                                    <span style={{ color: 'black', fontSize: '15px' }}>알림</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ padding: '10px' }}>
                        <small>내가 볼 수 있는 내용</small>
                        <div>
                            <a style={{ textDecoration: 'none' }} href="#">
                                <img style={{ width: '24px', height: '24px', marginRight: '5px' }} src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span style={{ color: 'black', fontSize: '15px' }}>업데이트를 설정한 계정</span>
                            </a>
                        </div>
                        <div>
                            <a style={{ textDecoration: 'none' }} href="#">
                                <img style={{ width: '24px', height: '24px', marginRight: '5px' }} src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span style={{ color: 'black', fontSize: '15px' }}> 좋아요 수 및 공유 수</span>
                            </a>
                        </div>
                    </div>
                    <div style={{ padding: '10px' }}>
                        <small>내 콘텐츠를 볼 수 있는 사람</small>
                        <div>
                            <a style={{ textDecoration: 'none' }} href="#">
                                <img style={{ width: '24px', height: '24px', marginRight: '5px' }} src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span style={{ color: 'black', fontSize: '15px' }}>계정 공개 범위</span>
                            </a>
                        </div>
                        <div>
                            <a style={{ textDecoration: 'none' }} href="#">
                                <img style={{ width: '24px', height: '24px', marginRight: '5px' }} src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span style={{ color: 'black', fontSize: '15px' }}>친한 친구</span>
                            </a>
                        </div>
                        <div>
                            <a style={{ textDecoration: 'none' }} href="#">
                                <img style={{ width: '24px', height: '24px', marginRight: '5px' }} src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span style={{ color: 'black', fontSize: '15px' }}>차단된 계정</span>
                            </a>
                        </div>
                        <div>
                            <a style={{ textDecoration: 'none' }} href="#">
                                <img style={{ width: '24px', height: '24px', marginRight: '5px' }} src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span style={{ color: 'black', fontSize: '15px' }}>스토리 및 라이브 방송 숨기기</span>
                            </a>
                        </div>
                    </div>
                    <div style={{ padding: '10px' }}>
                        <small>다른 사람이 나와 소통할 수 있는 방법</small>
                        <div>
                            <a style={{ textDecoration: 'none' }} href="#">
                                <img style={{ width: '24px', height: '24px', marginRight: '5px' }} src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span style={{ color: 'black', fontSize: '15px' }}>메시지 및 스토리 답장</span>
                            </a>
                        </div>
                        <div>
                            <a style={{ textDecoration: 'none' }} href="#">
                                <img style={{ width: '24px', height: '24px', marginRight: '5px' }} src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span style={{ color: 'black', fontSize: '15px' }}>태그 및 언급</span>
                            </a>
                        </div>
                        <div>
                            <a style={{ textDecoration: 'none' }} href="#">
                                <img style={{ width: '24px', height: '24px', marginRight: '5px' }} src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span style={{ color: 'black', fontSize: '15px' }}>댓글</span>
                            </a>
                        </div>
                        <div>
                            <a style={{ textDecoration: 'none' }} href="#">
                                <img style={{ width: '24px', height: '24px', marginRight: '5px' }} src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span style={{ color: 'black', fontSize: '15px' }}>공유 및 리믹스</span>
                            </a>
                        </div>
                        <div>
                            <a style={{ textDecoration: 'none' }} href="#">
                                <img style={{ width: '24px', height: '24px', marginRight: '5px' }} src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span style={{ color: 'black', fontSize: '15px' }}>제한된 계정</span>
                            </a>
                        </div>
                        <div>
                            <a style={{ textDecoration: 'none' }} href="#">
                                <img style={{ width: '24px', height: '24px', marginRight: '5px' }} src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span style={{ color: 'black', fontSize: '15px' }}>숨겨진 단어</span>
                            </a>
                        </div>
                    </div>
                    <div style={{ padding: '10px' }}>
                        <small>내 앱 및 미디어</small>
                        <div>
                            <a style={{ textDecoration: 'none' }} href="#">
                                <img style={{ width: '24px', height: '24px', marginRight: '5px' }} src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span style={{ color: 'black', fontSize: '15px' }}>보관 및 다운로드</span>
                            </a>
                        </div>
                        <div>
                            <a style={{ textDecoration: 'none' }} href="#">
                                <img style={{ width: '24px', height: '24px', marginRight: '5px' }} src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span style={{ color: 'black', fontSize: '15px' }}>언어</span>
                            </a>
                        </div>
                        <div>
                            <a style={{ textDecoration: 'none' }} href="#">
                                <img style={{ width: '24px', height: '24px', marginRight: '5px' }} src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span style={{ color: 'black', fontSize: '15px' }}>웹사이트 권한</span>
                            </a>
                        </div>
                    </div>
                    <div style={{ padding: '10px' }}>
                        <small>가족</small>
                        <div>
                            <a style={{ textDecoration: 'none' }} href="#">
                                <img style={{ width: '24px', height: '24px', marginRight: '5px' }} src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span style={{ color: 'black', fontSize: '15px' }}>관리 감독</span>
                            </a>
                        </div>
                    </div>
                    <div style={{ padding: '10px' }}>
                        <small>프로페셔널</small>
                        <div>
                            <a style={{ textDecoration: 'none' }} href="#">
                                <img style={{ width: '24px', height: '24px', marginRight: '5px' }} src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span style={{ color: 'black', fontSize: '15px' }}>계정 유형 및 도구</span>
                            </a>
                        </div>
                    </div>
                    <div style={{ padding: '10px' }}>
                        <small>더 많은 정보 및 지원</small>
                        <div>
                            <a style={{ textDecoration: 'none' }} href="#">
                                <img style={{ width: '24px', height: '24px', marginRight: '5px' }} src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span style={{ color: 'black', fontSize: '15px' }}>도움말</span>
                            </a>
                        </div>
                        <div>
                            <a style={{ textDecoration: 'none' }} href="#">
                                <img style={{ width: '24px', height: '24px', marginRight: '5px' }} src={process.env.PUBLIC_URL + '/images/'}></img>
                                <span style={{ color: 'black', fontSize: '15px' }}>계정 상태</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* 오른쪽 여백 */}
            <div style={{ width: '400px', border: '1px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ alignItems: 'center', display: 'flex', background: 'rgba(128, 128,128, 0.1)', width: '380px', height: '100px', border: '1px solid black', margin: '10px', borderRadius: '5%' }}>
                    <div style={{ border: '1px solid black', width: '100px', height: '80px', borderRadius: '50%', marginRight: '10px' }}>
                        {/* 이미지가 선택되었다면 해당 이미지를 표시 */}
                        {userProfilePic && <img value={Array.isArray(user) ? user[0].profile_pic : user.profile_pic} src={userProfilePic} alt="Profile Pic" style={{ borderRadius: '50%', width: '100%', height: '100%', marginRight: '5px' }} />}
                    </div>
                    <div style={{ width: '100px', marginRight: '20px' }}>
                        <div>{Array.isArray(user) ? user[0].userId : user.userId}</div>
                        <div>{Array.isArray(user) ? new Date(user[0].updated_at).toLocaleDateString() + " " + new Date(user[0].updated_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : new Date(user.updated_at).toLocaleDateString() + " " + new Date(user.updated_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                    </div>
                    <div style={{ width: '20px' }}>
                        {/* 파일 선택 버튼 */}
                        <input type="file" accept='image/jpeg,image/png' onChange={handleImageUpload} style={{ width: '90px', display: 'inline-block' }} id="profilePicInput" />

                    </div>
                </div>
                <div style={{ margin: '20px', padding: '5px', border: '1px solid black', width: '380px' }}>
                    <div>
                        <strong>웹사이트</strong>
                    </div>
                    <div>
                        <input style={{ width: '350px', margin: '10px', borderRadius: '5px', background: 'rgba(128, 128,128, 0.1)' }} type='text' name="website" value={Array.isArray(user) ? user[0].website : user.website} onChange={handleWebsite} placeholder=' 웹사이트 '></input>
                    </div>
                </div>
                <div style={{ margin: '20px', padding: '5px', border: '1px solid black', width: '380px' }}>
                    <div>
                        <strong>소개</strong>
                    </div>
                    <div>
                        <textarea name='bio' value={Array.isArray(user) ? user[0].bio : user.bio} onChange={handleBio} style={{ margin: '10px' }} rows={1} cols={45}></textarea>
                    </div>
                </div>
                <div style={{ padding: '5px', margin: '20px', border: '1px solid black', width: '380px' }}>
                    <div>
                        <strong>국가</strong>
                    </div>
                    <div>
                        <select style={{ margin: '10px' }} onChange={handleCountry}>
                            {countries.map(country => (
                                <option key={country.code} value={country.code}>
                                    {country.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div style={{ border: '1px solid black', width: '380px' }}>
                    <div style={{ margin: '5px' }}>
                        <strong>프로필 계정 추천 표시</strong>
                    </div>
                    <div style={{ padding: '5px' }}>
                        <div>
                            프로필에 계정 추천 표시
                            <div style={{ padding: '10px' }}>
                                <div style={{ color: 'gray', fontSize: '10px' }}>사람들이 회원님의 프로필에서 비슷한 계정 추천을 볼 수 있는지와 회원님의 계저징이 다른 프로필에서 추천될 수 있는지를 선택하세요.</div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={updateProfile}>변경하기</button>
                </div>
            </div>
        </div>
    </div>)
}
export default ReProfile