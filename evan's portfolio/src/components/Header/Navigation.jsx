import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className='nav'>
      <ul>
        <button><NavLink to="/about-me" >About Me</NavLink></button>
        <button><NavLink to="/portfolio" >Portfolio</NavLink></button>
        <button><NavLink to="/contact" >Contact</NavLink></button>
        <button><NavLink to="/resume" >Resume</NavLink></button>
      </ul>
    </nav>
  );
}

export default Navigation;