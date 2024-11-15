// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import { RecoilRoot } from 'recoil';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Lendering from './pages/Lendering';
import Detail from './pages/Detail'

function App() {
  return (
    <div className='App'>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Lendering />} />
          <Route path="/main" element={<Main />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/detail' element ={<Detail/>} />
        </Routes>
      </RecoilRoot>
    </div>

  );
}

export default App;
