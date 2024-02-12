import AboutMe from './components/Elements/AboutMe';
import Projects from './components/Elements/Projects';
import './App.css';
import Contact from './components/Elements/Contanct';
import PostContainer from './components/Blog/PostContainer'

function App() {
  return (
    <>
      <body>
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
