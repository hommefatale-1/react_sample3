import './App.css';
import Main from './page/Main';
import Join from './page/Join';
import Home from './page/Home';
import Profile from './page/Profile';
import Nav from './components/Nav';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReProfile from './page/ReProfile';


function App() {

  return (<div>
    <Router>
    <Nav></Nav>
      <Routes>
        <Route path='/Main' element={<Main></Main>}></Route>
        <Route path='/Join' element={<Join></Join>}></Route>
        <Route path='/ReProfile' element={<ReProfile></ReProfile>}></Route>
        <Route path='/Profile' element={<Profile></Profile>}></Route>
      </Routes>
    </Router>
  </div>
  );
}


export default App;
