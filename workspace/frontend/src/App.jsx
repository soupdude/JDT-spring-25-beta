import Navbar from "./components/navbar/navbar"
import Profile from "./components/profile/profile"
import Projects from "./components/projects/projects";
import Experiences from "./components/experiences/experiences";
import About from "./components/about/about";
import './app.css';

const projectData = [
    {
        name: "Project One",
        description: "This is a description of project one.",
        github: "https://github.com/user/project-one"
    },
    {
        name: "Project Two",
        description: "This is a description of project two.",
        github: "https://github.com/user/project-two"
    }
];

function App() {
    return (
        <>
            <Navbar/>
            <Profile/>
            <div id="about">
                <About/>
            </div>
            <div id="projects">
                <h2>Projects</h2>
                {/* Map through projects and render multiple Project components */}
                {projectData.map((project, index) => (
                    <Projects 
                        key={index} 
                        name={project.name} 
                        description={project.description} 
                        github={project.github} 
                    />
                ))}
            </div>
            <div id="experiences">
                <h2>Experiences</h2>
                <Experiences 
                    title="Job Title" 
                    info="Job Description" 
                    dates="Job Dates" 
                    bullets={["Responsibility 1", "Responsibility 2", "Responsibility 3"]}
                />
            </div>
        </>
    )
}

export default App