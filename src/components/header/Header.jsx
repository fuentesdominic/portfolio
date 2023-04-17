import { VscGithub } from 'react-icons/vsc';
import { SlSocialLinkedin } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import { SlArrowDown } from 'react-icons/sl';

const Header = ({ onNavClick }) => {

  return (
    <div className="header">
      <div className="header-div">
        <div className="name">
          <h1>
            Dominic Fuentes
          </h1>
        </div>
        <div className="jobtitle">
          <h2>
            Full Stack Developer
          </h2>
        </div>
        <div className="slogan">
          <h3>
            Transforming ideas into reality, one line of code at a time.
          </h3>
        </div>
        <div className='header-links'>
          <a className='header-linkdin-icon' href='https://www.linkedin.com/in/dominicfuentes1/' target="_blank" rel='noreferrer'><SlSocialLinkedin />
          </a>
          <a className='header-github-icon' href='https://github.com/fuentesdominic' target="_blank" rel='noreferrer'><VscGithub />
          </a>
        </div>
        <div className='header-image-div'>
          <img className='header-image' src='https://i.imgur.com/ZZfDl7W.jpeg' alt='' /> 
        </div>
        <div className='scroll-button'>
          <Link onClick={() => onNavClick('about')}><SlArrowDown /></Link>
        </div>
    </div>
  </div>
  )
}

export default Header