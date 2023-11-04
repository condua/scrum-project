import logo from './logo.svg';
import Login from './components/Login';
import JoinRoom from './components/JoinRoom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/joinroom' element={<JoinRoom/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
