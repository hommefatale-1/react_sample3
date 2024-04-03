import { Link } from "react-router-dom"

function Nav(){
    
    return(<nav>
        <ul>
            <li><Link to="/">홈</Link></li>
            <li><Link to="/profil">프로필</Link></li>
        </ul>
    </nav>)
}
export default Nav