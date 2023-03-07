import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className='main'>
      <nav className='nav'>
        <div>
          <ul>
            <li className='list'>
              <Link exact to='/home' className='nav-link'>Home</Link>
              <Link to='/about' className='nav-link'>About</Link>
              <Link to='/login' className='nav-link'>Log in</Link>
              {/* <Link to='/signup' className='nav-link'>Signup</Link> */}

            </li>
          </ul>
        </div>
      </nav>

    </div>
  )
}

export default Navbar;
