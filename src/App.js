import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
