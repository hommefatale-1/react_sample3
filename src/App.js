import './App.css';
import Main from './page/Main';
import Login from './page/Login';
import Home from './page/Home';
import Profile from './page/Profile';
import Nav from './components/Nav';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  return (<div>
    <Router>
    <Nav></Nav>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Profile' element={<Profile></Profile>}></Route>
      </Routes>
    </Router>
  </div>
  );
}


export default App;
