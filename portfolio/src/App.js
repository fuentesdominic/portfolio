import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/contact/Contact';
import SideBar from './components/sideBar/SideBar';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';

function App() {

  const handleNavClick = (selction) => {
    const element = document.getElementById(selction);
    element.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div className="App">
      <SideBar onNavClick={handleNavClick} />
      <Resume onNavClick={handleNavClick} />
      <About onNavClick={handleNavClick} /> 
      <Projects onNavClick={handleNavClick} />
      <Contact onNavClick={handleNavClick} /> 
    </div>
  );
}

export default App;
