import './Projects.css';
import { VscGithub } from 'react-icons/vsc';
import { BiPlayCircle } from 'react-icons/bi';

const Projects = ({id}) => {

  const projects = [
    {
      projectName: 'Brunch',
      img: 'https://i.imgur.com/oEv5WDL.png',
      technologyUsed: 'JavaScript | PostgreSQL | Express | React | Node',
      description: 'This application has User Authentication and shows various restuarnats throughout Lake Ozark, Missouri.',
      links: {
        github: 'https://github.com/fuentesdominic/brunch',
        live: 'https://brunch-peach.vercel.app/register'
      }
    },
    {
      projectName: 'CodeUp',
      img: 'https://i.imgur.com/FtMX9m2.png',
      technologyUsed: 'JavaScript | PostgreSQL | Express | React | Node',
      description: 'FIrst project using user authentication. This application can be used to help beginners learn code.',
      links: {
        github: 'https://github.com/fuentesdominic/CodeUp',
        live: 'https://code-up.vercel.app/register'
      }
    },
    {
      projectName: 'NFL List',
      img: 'https://i.imgur.com/TcFh2AX.png',
      technologyUsed: 'JavaScript | MongoDB | Express | React | Node',
      description: 'Encourages users to navigate the divisions and coferences of the NFL to view information about teams.',
      links: {
        github: 'https://github.com/fuentesdominic/NFL_List',
        live: 'https://nfl-list.herokuapp.com/'
      }
    },
    {
      projectName: 'Metric Conversion',
      img: 'https://i.imgur.com/Go0pyMW.png',
      technologyUsed: 'JavaScript | HTML | CSS',
      description: 'A simple but useful tool that converts metric-to-imperial and vice versa.',
      links: {
        github: 'https://github.com/fuentesdominic/metric-conversion',
        live: 'https://metric-conversion.vercel.app/'
      }
    },
    {
      projectName: 'Coding Coasters',
      img: 'https://i.imgur.com/v5sydFw.png',
      technologyUsed: 'JavaScript | MongoDB | Express | React | Node',
      description: 'First project collaborating with peers. This application allows users to create theme parks and add rides.',
      links: {
        github: 'https://github.com/noahdvaughn/hackathon-project',
        live: 'https://hackathon-dom-josh-noah.herokuapp.com/'
      }
    },
    {
      projectName: 'Find Four',
      img: 'https://i.imgur.com/zvnPh8J.png',
      technologyUsed: 'JavaScript | HTML | CSS',
      description: 'Two player game that alternates players until one achieves a line of four connected circles.',
      links: {
        github: 'https://github.com/fuentesdominic/connect_four_project',
        live: 'https://find-four-connect-4.surge.sh/'
      }
    }
  ]

  return (
    <div className='projects-page' id={id}>
      {/* <div className='projects-page-title'> */}
        <h3 className='projects-page-title'>Projects</h3>
      {/* </div> */}
      <div className='projects'>
        {projects.map((project) => (
          <div className='project-div'>
            <img src={project.img} alt='' />
            <h2>{project.projectName}</h2>
            <h3>{project.technologyUsed}</h3>
            <p className='project-info'>{project.description}</p>
            <p className='project-link'>Links:&ensp; <a
             className='project-nav' href={project.links.github} target='_blank' rel='noreferrer'>Github <VscGithub /></a> &ensp; <a className='project-nav' href={project.links.live} target='_blank' rel='noreferrer'>Live <BiPlayCircle /> </a> </p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Projects