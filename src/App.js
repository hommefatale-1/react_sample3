import './App.css';
import Home from './page/Home';
import Profil from './page/Profil';
import Nav from './components/Nav';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (<div>
    <Router>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/profil' element={<Profil></Profil>}></Route>
      </Routes>
    </Router>
  </div>
  );
}


export default App;
