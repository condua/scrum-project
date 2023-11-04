import Login from './components/Login';
<<<<<<< HEAD
import JoinRoom from './components/JoinRoom';

=======
import Register from './components/Register';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
>>>>>>> df6e267d16c7a6bf07b4d7ea803077519ab2331a
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
<<<<<<< HEAD
        <Route path='/joinroom' element={<JoinRoom/>}/>
=======
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
>>>>>>> df6e267d16c7a6bf07b4d7ea803077519ab2331a
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
