import './Navbar.css'
import logo from '../../assets/logo.svg'
const navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt=''></img>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>About Me</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Experience</li>
        <li>Contact</li>
      </ul>
      <div className='nav-connect'>Connect with me </div>
    </div>
  )
}

export default navbar

