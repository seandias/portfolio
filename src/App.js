import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/intro";
import Workexp from "./components/Workexp/workexp";
import Projects from "./components/Projects/projects";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Workexp/>
      <Projects/>
    </div>
  );
}

export default App;
