import AboutMe from './components/Elements/AboutMe';
import Projects from './components/Elements/Projects';
import Contact from './components/Elements/Contanct';
import PostContainer from './components/Blog/PostContainer'
import Scene from './components/Scenes/Scene';
import './App.css';

function App() {
  return (
    <>
      <body>
          <Scene />
          <div class="page-content">
            <AboutMe />
            <Projects />
            <PostContainer />
          </div>
      </body>
      {/* <footer>
        <Contact style={{display: "none"}}/>
      </footer> */}
    </>
  );
}

export default App;
