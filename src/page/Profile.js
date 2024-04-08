import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Profile() {
  const [profile, setProfile] = useState({});
  const [menuDropdown, setMenuDropdown] = useState(false);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await fetch(`http://localhost:4000/profile.dox?userId=test`);
        const jsonData = await response.json();
        setProfile(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error("에러!");
      }
    }
    fetchProfile();
  }, []);
  const toggleDropdown = () => {
    setMenuDropdown(!menuDropdown);
  }

  return (
    <div style={{ backgroundColor: '#f5f5f5' }}>
      {/* 왼쪽 영역 */}
      <div style={{ display: 'flex' }}>
        <div style={{ width: '252px', height: '802px', border: '1px solid red', position: 'relative' }}>

          <div style={{ border: '1px solid black' }}>
            <Link to="/">
              <a href='#'><img style={{ width: '24px', height: '24px' , textDecoration: 'none' }} src='' alt='인스타그램 로고'></img></a>
            </Link>
          </div>

          <div style={{ margin: '4px', padding: '12px', border: '1px solid red' }}>
            <Link to='/Profile'>
              <a href='#' style={{ display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none' }}>
                <img style={{ width: '24px', height: '24px' }} src={process.env.PUBLIC_URL + '/images/home.png'} alt="홈" />
                <strong>홈</strong>
              </a>
            </Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', margin: '4px', padding: '12px', border: '1px solid black' }}>
            <a href='#' style={{ display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none' }}>
              <img style={{ width: '24px', height: '24px' }} src={process.env.PUBLIC_URL + '/images/search.png'}></img>
              <span>검색</span>
            </a>
          </div>
          <div style={{ margin: '4px', padding: '12px', border: '1px solid red' }}>
            <a href='#' style={{ display: 'flex', alignItems: 'center', gap: '20px' , textDecoration: 'none' }}>
              <img style={{ width: '24px', height: '24px' }} src={process.env.PUBLIC_URL + '/images/expand.png'}></img>
              <span>탐색 탭</span>
            </a>
          </div>
          <div style={{ margin: '4px', padding: '12px', border: '1px solid black' }}>
            <a href='#' style={{ display: 'flex', alignItems: 'center', gap: '20px' , textDecoration: 'none' }}>
              <img style={{ width: '24px', height: '24px' }} src={process.env.PUBLIC_URL + '/images/video.png'}></img>
              <span>릴스</span>
            </a>
          </div>
          <div style={{ margin: '4px', padding: '12px', border: '1px solid red' }}>
            <a href='#' style={{ display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none' }}>
              <img style={{ width: '24px', height: '24px' }} src={process.env.PUBLIC_URL + '/images/messageSend.png'}></img>
              <span>메시지</span>
            </a>
          </div>
          <div style={{ margin: '4px', padding: '12px', border: '1px solid black' }}>
            <a href='#' style={{ display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none' }}>
              <img style={{ width: '24px', height: '24px' }} src={process.env.PUBLIC_URL + '/images/heartbeat.png'}></img>
              <span>알림</span>
            </a>
          </div>
          <div style={{ margin: '4px', padding: '12px', border: '1px solid black' }}>
            <a href='#' style={{ display: 'flex', alignItems: 'center', gap: '20px' , textDecoration: 'none' }}>
              <img style={{ width: '24px', height: '24px' }} src={process.env.PUBLIC_URL + '/images/love.png'}></img>
              <span>만들기</span>
            </a>
          </div>
          <div style={{ margin: '4px', padding: '12px', border: '1px solid red' }}>
            <a href='#' style={{ display: 'flex', alignItems: 'center', gap: '20px' , textDecoration: 'none' }}>
              <img style={{ width: '24px', height: '24px' }} src={process.env.PUBLIC_URL + '/images/profile.png'}></img>
              <span>프로필</span>
            </a>
          </div>
          {/* 프로필 영역 */}
          <div style={{ marginTop: '250px', display: 'flex', flexDirection: 'column' }}>
            <div>
              <a href='#' style={{ display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none' }}>
                <img style={{ width: '24px', height: '24px' }} src={process.env.PUBLIC_URL + '/images/Threads.png'} alt="프로필"></img>
                <span>Threads</span>
              </a>
            </div>
            {/* 더보기 클릭시 드롭다운 */}
            <div>
              <div onClick={toggleDropdown} style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '20px', cursor: 'pointer' }}>
                <img style={{ width: '24px', height: '24px' }} src={process.env.PUBLIC_URL + '/images/view.png'} alt="프로필"></img>
                <span>더보기</span>
              </div>
              {menuDropdown && (
                <div style={{ color: 'black', borderRadius: "5%", marginBottom: '20px', padding: '10px', backgroundColor: 'white', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)', position: 'absolute', right: '50px', bottom: '50px', width: "180px", height: "30 0px" }}>
                  {/* 드롭다운 내용 */}
                  <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li style={{ textAlign: 'center', margin: 0, padding: '5px', border: '1px solid black' }}>
                      <a href="#" style={{textDecoration: 'none'}} >
                        <img src={process.env.PUBLIC_URL + '/images/'} alt="오류" style={{ marginRight: '5px' }} />
                        <span>설정</span>
                      </a>
                    </li>
                    <li style={{ textAlign: 'center', margin: 0, padding: '5px', border: '1px solid black' }}>
                      <a href="#" style={{textDecoration: 'none'}} >
                        <img src={process.env.PUBLIC_URL + '/images/'} alt="오류" style={{ marginRight: '5px' }} />
                        <span>내 활동</span>
                      </a>
                    </li>
                    <li style={{ textAlign: 'center', margin: 0, padding: '5px', border: '1px solid black' }}>
                      <a href="#" style={{textDecoration: 'none'}} >
                        <img src={process.env.PUBLIC_URL + '/images/'} alt="오류" style={{ marginRight: '5px' }} />
                        <span>저장됨</span>
                      </a>
                    </li>
                    <li style={{ textAlign: 'center', margin: 0, padding: '5px', border: '1px solid black' }}>
                      <a href="#" style={{textDecoration: 'none'}} >
                        <img src={process.env.PUBLIC_URL + '/images/'} alt="오류" style={{ marginRight: '5px' }} />
                        <span>모두 전환</span>
                      </a>
                    </li>
                    <li style={{ textAlign: 'center', margin: 0, padding: '5px', border: '1px solid black' }}>
                      <a href="#" style={{textDecoration: 'none'}} >
                        <img src={process.env.PUBLIC_URL + '/images/'} alt="오류" style={{ marginRight: '5px' }} />
                        <span>문제신고</span>
                      </a>
                    </li>
                    <div style={{ display: 'flex', alignItems: 'center', width: '100%', margin: '10px 0' }}>
                      <div style={{ flex: '1', borderTop: '1px solid gray' }}></div>
                      <div style={{ flex: '1', borderTop: '1px solid gray' }}></div>
                    </div>
                    <li style={{ textAlign: 'center', margin: 0, padding: '5px', border: '1px solid black' }}>
                      <a href="#" style={{textDecoration: 'none'}} >
                        <img src={process.env.PUBLIC_URL + '/images/'} alt="오류" style={{ marginRight: '5px' }} />
                        <span>계정 전환</span>
                      </a>
                    </li>
                    <li style={{ textAlign: 'center', margin: 0, padding: '5px', border: '1px solid black' }}>
                      <a href="#" style={{textDecoration: 'none'}} >
                        <img src={process.env.PUBLIC_URL + '/images/'} alt="오류" style={{ marginRight: '5px' }} />
                        <span>로그아웃</span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}

            </div>
          </div>
        </div>
        {/* 오른쪽 영역 */}
        <div>
          <div style={{ display: 'flex', flexDirection: 'row', height: '252px', width: '802px', border: '1px solid black' }} className='flex-column'>
            <div style={{ padding: '10px' }}></div>
            <div style={{ margin: '10px' }} className='d-flex align-items-'>
              <div style={{ position: 'relative', width: '100px', height: '100px', borderRadius: '20%', overflow: 'hidden', marginRight: '10px' }}>
                <img
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  src={Array.isArray(profile) ? profile[0]?.profile_pic : profile?.profile_pic}
                  alt='프로필 이미지' />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                  <div style={{ marginRight: '5px' }}>
                    <span>{Array.isArray(profile) ? profile[0].userId : profile.userId}</span>
                  </div>
                  <div style={{ marginRight: '5px' }}>
                    <button>프로필 편집</button>
                  </div>
                  <div>
                    <button>보관된 스토리보기</button>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                  <div style={{ marginBottom: '10px' }}>
                    <span>게시물: </span>
                    <strong>{Array.isArray(profile) ? profile[0].posts : profile.posts}</strong>
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <span>팔로워: </span>
                    <strong>{Array.isArray(profile) ? profile[0].follower : profile.follower}</strong>
                  </div>
                  <div>
                    <span>팔로잉: </span>
                    <strong>{Array.isArray(profile) ? profile[0].following : profile.following}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 프로필 */}
          <div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', width: '100%', margin: '10px 0' }}>
                <div style={{ flex: '1', borderTop: '1px solid gray' }}></div>
                <div style={{ flex: '1', borderTop: '1px solid gray' }}></div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ margin: '0 10px' }}>
                <a href='#'>
                  <img style={{ width: '12px', height: '12px' }} src={process.env.PUBLIC_URL + '/images/'} alt="오류"></img>
                  <small>게시물</small>
                </a>
              </div>
              <div style={{ margin: '0 10px' }}>
                <a href='#'>
                  <img style={{ width: '12px', height: '12px' }} src={process.env.PUBLIC_URL + '/images/'} alt="오류"></img>
                  <small>저장됨</small>
                </a>
              </div>
              <div style={{ margin: '0 10px' }}>
                <a href='#'>
                  <img style={{ width: '12px', height: '12px' }} src={process.env.PUBLIC_URL + '/images/'} alt="오류"></img>
                  <small>태그됨</small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
