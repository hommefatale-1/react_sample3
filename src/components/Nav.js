import { Link } from "react-router-dom"

function Nav(){
    
    return(<nav>
        <ul>
            <li><Link to="/Main">홈</Link></li>
            <li><Link to="/join">회원가입</Link></li>
            <li><Link to="/Profile">프로필</Link></li>
            <li><Link to="/ReProfile">프로필 편집</Link></li>
        </ul>
    </nav>)
}
export default Nav