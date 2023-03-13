import { NavLink } from 'react-router-dom';

function NavigationLink({ children, toPage }) {
  return (
    <NavLink
      to={toPage}
      className='flex items-center justify-center h-10 md:w-32 w-28 bg-slate-300 rounded-lg'
    >
      {children}
    </NavLink>
  );
}

export default NavigationLink;
