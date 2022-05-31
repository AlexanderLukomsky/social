import './App.scss';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Footer } from './components/Footer/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';

import { UsersContainer } from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import { LoginPage } from './components/Login/Login';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { useEffect } from 'react';
import { authThunkCreator } from './redux/auth-reducer';
import { useDispatch } from 'react-redux';
import { HeaderContainer } from './components/Header/HeaderContainer';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(authThunkCreator())
  }, [])
  return (
    <div className="App">
      <div className='app-wrapper'>
        <HeaderContainer />
        <nav className='sidebar'>
          <Sidebar />
        </nav>
        <div className='body'>
          <Routes>
            <Route path='/profile/:userId' element={<ProfileContainer />} />
            <Route path='/profile' element={<ProfileContainer />} />
            <Route path='/dialogs' element={<DialogsContainer />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path="/" element={<Navigate replace to="/profile" />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>

  );
}

export default App;
