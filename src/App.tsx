import './App.scss';
import { MouseEvent } from 'react';
import { Profile } from './components/Profile/Profile';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { Dialogs } from './components/Dialogs/Dialogs';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { DialogsType, MessagesType, PostsType } from './state/state';

type AppPropsType = {
  posts: PostsType[]
  dialogs: DialogsType[]
  messages: MessagesType[]
}
function App({ posts, dialogs, messages, ...props }: AppPropsType) {

  return (
    <div className="App">
      <div className='app-wrapper'>
        <Header />
        <nav className='sidebar'>
          <Sidebar />
        </nav>
        <div className='body'>
          <Routes>
            <Route path='/profile' element={<Profile posts={posts} />} />
            <Route path='/dialogs' element={<Dialogs dialogs={dialogs} messages={messages} />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>

  );
}

export default App;
