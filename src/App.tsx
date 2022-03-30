import './App.scss';
import { Profile } from './components/Profile/Profile';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Dialogs } from './components/Dialogs/Dialogs';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { ActionType, StateType } from './state/redux/redux-store';


type AppPropsType = {
  state: StateType
  dispatch: (action: ActionType) => void
}
function App({ state, ...props }: AppPropsType) {

  return (
    <div className="App">
      <div className='app-wrapper'>
        <Header />
        <nav className='sidebar'>
          <Sidebar />
        </nav>
        <div className='body'>

          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/dialogs' element={<Dialogs dialogsPage={state.dialogsPage} dispatch={props.dispatch} />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path="/" element={<Navigate replace to="/profile" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>

  );
}

export default App;
