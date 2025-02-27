import './Navbar.css'
import logo from '../../assets/logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt=''></img>
      <ul className='nav-menu'>
        <li><AnchorLink href='#hero'>Home</AnchorLink></li>
        <li><AnchorLink href='#about'>About</AnchorLink></li>
        <li><AnchorLink href='#skills'>Skills</AnchorLink></li>
        <li><AnchorLink href='#projects'>Projects</AnchorLink></li>
        <li><AnchorLink href='#experience'>Experience</AnchorLink></li>
        <li><AnchorLink href='#contact'>Contact</AnchorLink></li>
      </ul>
    </div>
  )
}

export default Navbar

