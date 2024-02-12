import AboutMe from './components/Elements/AboutMe';
import Projects from './components/Elements/Projects';
import './App.css';
import Contact from './components/Elements/Contanct';

function App() {
  return (
    <div className="App">
      <body>
        <AboutMe />
        <br />
        <Projects />
        <br />
        <Contact />
      </body>
    </div>
  );
}

export default App;
