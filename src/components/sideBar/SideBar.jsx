import './SideBar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ onNavClick }) => {

  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className='nav'>
      <div className='nav-items'>
        <ul className={`items ${showMenu ? 'show' : ''}`}>
          <li className='item'>
            <Link onClick={() => onNavClick('header')}>Home</Link>
          </li>
          <li className='item'>
            <Link onClick={() => onNavClick('about')}>About</Link>
          </li>
          <li className='item'>
            <Link onClick={() => onNavClick('projects')}>Projects</Link>
          </li>
          <li className='item'>
            <Link onClick={() => onNavClick('contact')}>Contact</Link>
          </li>
          <li className='item'>
            <a href='https://docs.google.com/document/d/13EZzbupTfKS3CSzTydAIo1M4spQxeOgnOvWgXOXrKig/edit?usp=sharing' target='_blank' rel='noreferrer'>Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default SideBar