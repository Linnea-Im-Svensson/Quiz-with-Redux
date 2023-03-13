import { Provider } from 'hooks-for-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import Highscore from './components/Highscore';
import Quiz from './components/Quiz';

//lägg till highscore
//gör designen snygg

function App() {
  return (
    <Router>
      <Provider>
        <div className='flex flex-col items-center px-16 bg-gradient-to-b from-[rgba(48,38,140,1)] via-[rgba(48,38,140,1)] to-[rgba(160,22,167,1)] h-[100vh] '>
          <nav className='absolute top-0  flex justify-center gap-8 py-6 mb-16 bg-gray-800 w-[100vw]'>
            <NavLink
              to='/admin'
              className='flex items-center justify-center h-10 w-32 bg-slate-300 rounded-lg'
            >
              Admin
            </NavLink>
            <NavLink
              to='/'
              className='flex items-center justify-center h-10 w-32 bg-slate-300 rounded-lg'
            >
              Quiz
            </NavLink>
            <NavLink
              to='/highscore'
              className='flex items-center justify-center h-10 w-32 bg-slate-300 rounded-lg'
            >
              Highscore
            </NavLink>
          </nav>
          <Routes>
            <Route path='/' element={<Quiz />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/highscore' element={<Highscore />} />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
