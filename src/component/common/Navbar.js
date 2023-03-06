import { Link } from 'react-router-dom'
import DropdownProfle from './DropdownProfle'
 
function Navbar() {
  return (
    <div>
      <nav>
        <div>
          <ul>
            <li>
              <Link to = '/homepage' className='nav-link'>Home</Link>
              <Link to = '/aboutpage' className='nav-link'>About</Link>
              <Link to = '/loginpage' className='nav-link'>Log in</Link>
              <Link to = '/signuppage' className='nav-link'>Signup</Link>
              
            </li>
          </ul>
        </div>
      </nav>
     
    </div>
  )
}

export default Navbar
