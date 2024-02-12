import AboutMe from './components/Elements/AboutMe';
import Projects from './components/Elements/Projects';
import './App.css';
import Contact from './components/Elements/Contanct';
import PostContainer from './components/Blog/PostContainer'
import Scene from './components/Scenes/Scene';

function App() {
  return (
    <>
      <body>
        <Scene />
        <AboutMe />
        <Projects />
        <PostContainer />
      </body>
      <footer>
        <Contact />
      </footer>
    </>
  );
}

export default App;
