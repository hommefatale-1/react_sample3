import "./Menu.css";
import Profil from '../page/Profil';

function Menu(props){

    return(<div className='menu'>
        <div className='menu-title'>{props.title}</div>
        <div className='menu-contents'>{props.contents}</div>
    </div>)
}
export default Menu