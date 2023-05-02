import './SideBar.css';
import { Link } from 'react-router-dom';
import pdf from '../../assets/resume.pdf';


const SideBar = ({ onNavClick }) => {

  return (
    <nav className='nav'>
      <div className='nav-items'>
     
        <Link className='item' onClick={() => onNavClick('header')}>Home</Link>
        <Link className='item' onClick={() => onNavClick('about')}>About</Link>
        <Link className='item' onClick={() => onNavClick('projects')}>Projects</Link>
        <Link className='item' onClick={() => onNavClick('contact')}>Contact</Link>
        <button className='resume-btn'><a className='item' href={pdf} target='_blank' rel='noreferrer'>Resume</a></button>

      </div>
    </nav>
  )
}
export default SideBar