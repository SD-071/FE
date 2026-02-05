import { NavLink } from 'react-router-dom';
import LogOut from "./LogOut"

function Navbar({setToken}) {
  return (
    <nav className='w-full px-6 py-2 text-sm flex justify-between'>
      <h3>Logo</h3>
      <ul className='w-1/2 flex justify-end gap-4'>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'text-red-200' : 'text-blue-200')} to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/app/about-us'
            style={({ isActive }) => (isActive ? { color: 'rosybrown' } : { color: 'cornflowerblue' })}
          >
            About
          </NavLink>
        </li>
        <li><LogOut setToken={setToken} /></li>
      </ul>
    </nav>
  );
}

export default Navbar;
