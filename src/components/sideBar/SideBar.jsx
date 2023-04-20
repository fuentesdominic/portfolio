import './SideBar.css';
import { Link } from 'react-router-dom';

const SideBar = ({ onNavClick }) => {

  return (
    <nav className='nav'>
      <div className='nav-items'>
     
        <Link className='item' onClick={() => onNavClick('header')}>Home</Link>
        <Link className='item' onClick={() => onNavClick('about')}>About</Link>
        <Link className='item' onClick={() => onNavClick('projects')}>Projects</Link>
        <Link className='item' onClick={() => onNavClick('contact')}>Contact</Link>
        <a className='item' href='https://docs.google.com/document/d/13EZzbupTfKS3CSzTydAIo1M4spQxeOgnOvWgXOXrKig/edit?usp=sharing' target='_blank' rel='noreferrer'>Resume</a>

      </div>
    </nav>
  )
}
export default SideBar