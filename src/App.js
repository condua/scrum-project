import logo from './logo.svg';
import Login from './components/Login';
import Register from './components/Register';
import Classes from './components/Exam'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/classes' element={<Classes/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
