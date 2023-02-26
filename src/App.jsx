import { Provider } from 'hooks-for-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import { useQuiz } from './redux/quiz';

function App() {
  return (
    <Router>
      <Provider>
        <div className='flex flex-col items-center justify-center px-16'>
          <nav className='flex justify-center gap-8 py-6 mb-16 bg-green-200 w-[100vw]'>
            <NavLink
              to='/admin'
              className='flex items-center justify-center h-10 w-32 bg-slate-300 rounded-lg'
            >
              Admin
            </NavLink>
            <NavLink
              to='quiz'
              className='flex items-center justify-center h-10 w-32 bg-slate-300 rounded-lg'
            >
              Quiz
            </NavLink>
          </nav>
          <Routes>
            <Route path='/' element={<h1>Home</h1>} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/quiz' element={<h1>Quiz</h1>} />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
