import { useState, useEffect, useRef } from 'react';

function Profile() {
  const [user, setUser] = useState({
    username: '',
    follower: '',
    following: '',
    profile: '',
    posts: '',
    profileImage: '',
    userId: ''
  });

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await fetch(`http://localhost:4000/profile.dox?userId=test`);
        const jsonData = await response.json();
        setUser(jsonData);
        jsonData.profileImage = '';
        console.log(jsonData);
      } catch (error) {
        console.error("에러!");
      }
    }
    fetchProfile();
  }, []);

  return (
    <div>
      <div>
        <div>
          <div style={{ display: 'flex', flexDirection: 'row', height: '500px', width: '800px', border: '1px solid black' }} className='flex-column'>
            <div style={{ padding: '10px' }}></div>
            <div className='d-flex align-items-center'>
              <div style={{ position: 'relative', width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', marginRight: '20px' }}>
                <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={user.profileImage} alt='프로필 이미지'></img>
              </div>

              <div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div style={{ marginBottom: '10px' }}>
                    <span>게시물: </span>
                    <strong>{user.posts}</strong>
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <span>팔로워: </span>
                    <strong>{user.follower}</strong>
                  </div>
                  <div>
                    <span>팔로잉: </span>
                    <strong>{user.following}</strong>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '20px' }}>
              <div style={{ marginRight: '5px' }}>
                <span>{user.userId}</span>
              </div>
              <div style={{ marginRight: '5px' }}>
                <button>프로필 편집</button>
              </div>
              <div>
                <button>보관된 스토리보기</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
