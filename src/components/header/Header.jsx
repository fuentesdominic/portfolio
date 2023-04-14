import { VscGithub } from 'react-icons/vsc';
import { SlSocialLinkedin } from 'react-icons/sl';

const Header = () => {
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
            Letting ideas come to life, one line of code at a time.
          </h3>
          <a href="" target="_blank"><button className="header-linkedin-icon">Linkedin<SlSocialLinkedin /></button> </a>
          <a href="" target="_blank"><button className="header-github-icon">Github<VscGithub /></button></a>
        </div>
    </div>
  </div>
  )
}
export default Header