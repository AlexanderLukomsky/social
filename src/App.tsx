import './App.scss';
import { Profile } from './components/Profile/Profile';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { UsersContainer } from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
function App() {
  return (
    <div className="App">
      <div className='app-wrapper'>
        <Header />
        <nav className='sidebar'>
          <Sidebar />
        </nav>
        <div className='body'>
          <Routes>
            <Route path='/profile' element={<ProfileContainer />} />
            <Route path='/dialogs' element={<DialogsContainer />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path="/" element={<Navigate replace to="/profile" />} />
            <Route path="*" element={<Navigate replace to="/profile" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>

  );
}

export default App;
