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
import NavigationLink from './components/shared/NavigationLink';

function App() {
  return (
    <Router>
      <Provider>
        <div className='flex flex-col items-center px-16 bg-gradient-to-b from-[rgba(48,38,140,1)] via-[rgba(48,38,140,1)] to-[rgba(160,22,167,1)] h-[100vh] '>
          <nav className='absolute top-0  flex justify-center gap-8 py-6 mb-16 bg-gray-800 w-[100vw]'>
            <NavigationLink toPage='/admin'>Admin</NavigationLink>
            <NavigationLink toPage='/'>Quiz</NavigationLink>
            <NavigationLink toPage='/highscore'>Highscore</NavigationLink>
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
