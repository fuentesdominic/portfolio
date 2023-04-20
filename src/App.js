import './App.css';
import Contact from './components/contact/Contact';
import SideBar from './components/sideBar/SideBar';
import Projects from './components/projects/Projects';
import Header from './components/header/Header';
import About from './components/about/About';

function App() {

  const handleNavClick = (selction) => {
    const element = document.getElementById(selction);
    element.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div className="app">
      <SideBar onNavClick={handleNavClick} />
      <Header onNavClick={handleNavClick} id="header"/>
      <About onNavClick={handleNavClick} id="about"/> 
      <Projects onNavClick={handleNavClick} id="projects"/>
      <Contact onNavClick={handleNavClick} id="contact"/> 
    </div>
  );
}

export default App;
