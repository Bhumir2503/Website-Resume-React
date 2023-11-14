import Navbar from "./components/Navbar";
import Education from "./components/Education";
import Project from "./components/Project";
import Home from "./components/Home";
import "./App.css"



function App() {
  let project_title = ["Maze Generator and Solver","Website Resume","Sudoku Generator and Solver"];
  let project_image = ["images/maze.png","images/website.png","images/Sudoku.png"];
  let project_paragraph = ["Contributed to the creation of a user interface compatible with Linux and Windows platforms. Implemented Prim's Algorithm for maze generation, offering a variety of maze designs. Additionally, integrated Djikstra's, Depth First Search, and Breath First Search algorithms to provide effective maze-solving capabilities.",
  "Independently designed and deployed a responsive website to showcase my resume, effectively demonstrating proficiency in HTML and CSS for page formatting and styling. Utilized CSS Flexbox and JavaScript to create a dynamic and interactive web experience, incorporating JavaScript actions triggered by user interactions.",
  "Created an interactive and user-friendly Sudoku game with the ability to generate unique puzzles and solve them. Developed the graphical user interface using Pygame, providing an immersive gaming experience. Implemented algorithms for puzzle generation and solving, showcasing strong problem-solving and game development skills."];
  let project_link = ["https://github.com/Bhumir2503/Maze-Gen-Solver","https://github.com/Bhumir2503/Website-Resume-React","https://github.com/Bhumir2503/Sudoku"];
  
  
  return (
    <div>
      <Navbar />
      <Home />
      <h1 id="education">Education</h1>
      <Education title="Oak Ridge High School"  degree = "High School Diploma" image="images/school.jpg" date="Aug 2017 - May 2021" />
      <Education title="Pellissippi State Community College" degree = "Assosiates in Computer Science" image="images/college.jpg" date="Aug 2021 - Dec 2022" />
      <Education title="University of Tennessee, Knoxville" degree = "Bachelors in Computer Science" image="images/university.jpg" date="Jan 2023 - Present" />
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <h1 id="project">Projects</h1>
      <Project title={project_title} image={project_image} paragraph={project_paragraph} link={project_link}/>

    </div>
  );
}

export default App;
