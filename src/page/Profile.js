
import { useState, useEffect, useRef } from 'react';
import Post from '../components/Menu';
import './Profile.css';

function Profile() {
  let [user, setUser] = useState({ username: "", follower: "", following: "", profile: "", posts: 0, profileImage: '' });
  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await fetch(`http://localhost:4000/profile.dox?userId=user1`);
        const jsonData = await response.json();
        jsonData.profileImage = 'https://www.nintendo.co.kr/character/kirby/assets/img/home/kirby-powerful.png';
        setUser(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error("에러!");
      }
    }
    fetchProfile();
  }, []);
  return (
    <div className="container">
      <div className="profile">
        <div className="profile-header">
          <div className="profile-image">
            <img src={user.profileImage} alt="프로필 이미지" />
          </div>
          <div className="profile-info">
            <h2>{user.username}</h2>
            <p>{user.profile}</p>
            <div className="profile-stats">
              <div>
                <strong>{user.posts}</strong>
                <span>게시물</span>
              </div>
              <div>
                <strong>{user.follower}</strong>
                <span>팔로워</span>
              </div>
              <div>
                <strong>{user.following}</strong>
                <span>팔로잉</span>
              </div>
            </div>
          </div>
        </div>
       
      </div> 
    </div>
  );
};
export default Profile;