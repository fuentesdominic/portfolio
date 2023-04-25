import './About.css';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { IoLogoJavascript } from 'react-icons/io';
import { FaGitAlt, FaReact } from 'react-icons/fa';
import { IoLogoNodejs } from 'react-icons/io';
import { SiExpress, SiInsomnia, SiMongodb, SiPostgresql, SiVisualstudio } from 'react-icons/si';
import { GiElephant } from 'react-icons/gi';

const About = ({ id }) => {
  return (
    <div className='about' id={id}>
      <div className='skills-title'>
        <h2 className='skills-title-text'>
          Skills
        </h2>
      </div>
      <div className='skills-list'>
        <div className='skill-card'>
            <h3 className='skill-title-text'>Front End</h3>
          <div className='skill-card-skills'>
            <div className='skill-list'>
              <AiFillHtml5 className='skill-icon' style={{ color: '#e34c26' }} />
              <h4 className='skillH4'>HTML</h4>
            </div>
            <div className='skill-list'>
              <IoLogoCss3 className='skill-icon' style={{ color: '#264de4' }} />
              <h4 className='skillH4'>CSS</h4>
            </div>
            <div className='skill-list'>
              <IoLogoJavascript className='skill-icon' style={{ color: '#f0db4f' }} />
              <h4 className='skillH4'>JavaScript</h4>
            </div>
            <div className='skill-list'>
              <FaReact className='skill-icon' style={{ color: '#61dbfb'}} />
              <h4 className='skillH4'>React</h4>
            </div>
          </div>
        </div>
        <div className='skill-card'>
          <div className='skill-card-title'>
            <h3 className='skill-title-text'>Back End</h3>
          </div>
          <div className='skill-card-skills'>
            <div className='skill-list'>
              <IoLogoNodejs className='skill-icon' style={{ color: '#68a063' }} />
              <h4 className='skillH4'>Node JS</h4>
            </div>
            <div className='skill-list'>
              <SiExpress className='skill-icon' style={{ color: '#000000' }} />
              <h4 className='skillH4'>Express JS</h4>
            </div>
            <div className='skill-list'>
              <SiMongodb className='skill-icon' style={{ color: '#4db33d' }} />
              <h4 className='skillH4'>MongoDB</h4>
            </div>
            <div className='skill-list'>
              <SiPostgresql className='skill-icon' style={{ color: '#0064a5' }} />
              <h4 className='skillH4'>PostgresSQL</h4>
            </div>
          </div>
        </div>
        <div className='skill-card'>
          <div className='skill-card-title'>
            <h3 className='skill-title-text'>Tools</h3>
          </div>
          <div className='skill-card-skills'>
            <div className='skill-list'>
              <SiVisualstudio className='skill-icon' style={{ color: '#0078d7' }} />
              <h4 className='skillH4'>VS Code</h4>
            </div>
            <div className='skill-list'>
              <GiElephant className='skill-icon' style={{ color: '0e446c' }} />
              <h4 className='skillH4'>Postico 2</h4>
            </div>
            <div className='skill-list'>
              <SiInsomnia className='skill-icon' style={{ color: '#080135' }} />
              <h4 className='skillH4'>Insomnia</h4>
            </div>
            <div className='skill-list'>
              <FaGitAlt className='skill-icon' style={{ color: '#f1502f' }} />
              <h4 className='skillH4'>Git + GitHub</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About