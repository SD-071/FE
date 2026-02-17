import { CartLink } from ".."

function Navbar() {
  return (
    <nav className='navbar bg-secondary shadow-sm text-white flex justify-between p-4'>
      <div className='flex-1 font-bold'>
        <a className='btn btn-ghost bg-secondary text-xl' href={'/'}>
          eCommerce
        </a>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal items-center px-1'>
          <li>
            <a href={`/`}>Home</a>
          </li>
          <li className='dropdown dropdown-end cursor-pointer'>
            <CartLink />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
