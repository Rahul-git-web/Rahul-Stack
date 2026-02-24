import About from "./assets/About/About";
import Middle from "./Navbar/Middle";
import Navbar from "./Navbar/Navbar";
import Skill from "./Skills/Skill";

function App() {
  return (
    <>
      <div className="bg-gray-700 pt-20">
        <Navbar />
        <Middle />
        <About />
        <Skill />
      </div>
    </>
  );
}

export default App;
