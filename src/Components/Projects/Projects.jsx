import "./Projects.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Projects = () => {
  return (
    <div className="container-fluid projects-body" id="projects">
      <h1>My Recent Projects</h1>
      <div className="row">
        <div className="col-12 col-md-6 single-project">
          <h2>37 Base Project</h2>
          <h4>React JS | .Net Maui</h4>
          <p>
            37Base is a cross-platform app for the NSRI Jeffreys Bay station,
            replacing slow QR code checks with one simple tool. Built with .NET
            MAUI and paired with a React JS website for APK downloads, it helps
            crews save time, reduce errors, and keep rescue operations safe and
            efficient.
          </p>
          <div className="button-container">
            <button
              className="project-button"
              onClick={() =>
                window.open("https://station37.netlify.app/", "_blank")
              }
            >
              Live Site
            </button>
            <button
              className="project-button"
              onClick={() =>
                window.open(
                  "https://github.com/Tristan-Pillay-07/37-Base",
                  "_blank",
                )
              }
            >
              Github App
            </button>
          </div>
        </div>

        <div className="col-12 col-md-6 single-project">
          <h2>Jokes Web App</h2>
          <h4>ASP.NET MVC</h4>
          <p>
            Basic app with login and user creation. It integrates with a
            database for storing jokes.
          </p>
          <div className="button-container">
            <button
              className="project-button"
              onClick={() =>
                window.open(
                  "https://github.com/Tristan-Pillay-07/JokesWebApp",
                  "_blank",
                )
              }
            >
              Github
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6 single-project">
          <h2>Login & Sign-up Form</h2>
          <h4>React JS</h4>
          <p>
            Login Form built with React JS | Frontend only | Icons were imported
            with Bootstrap
          </p>
          <div className="button-container">
            <button
              className="project-button"
              onClick={() =>
                window.open(
                  "https://github.com/Tristan-Pillay-07/React-Login-Form",
                  "_blank",
                )
              }
            >
              Github
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6 single-project">
          <h2>Car-Website-Header</h2>
          <h4>React JS</h4>
          <p>Simple website header for practice.</p>
          <div className="button-container">
            <button
              className="project-button"
              onClick={() =>
                window.open(
                  "https://github.com/Tristan-Pillay-07/Car-Website-Header",
                  "_blank",
                )
              }
            >
              Github
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6 single-project">
          <h2>Employee Portal</h2>
          <h4>ASP.NET, ReactJS, Redux, SQL Server</h4>
          <p>
            This project is built using .NET Web API with a React frontend,
            implementing a modern full-stack architecture. It focuses on
            building and consuming RESTful APIs while ensuring efficient client
            server communication.
            <br /> Through this project, I have been deepening my understanding
            of API integration with React and Redux, particularly around state
            management, asynchronous data handling, and maintaining a clean,
            scalable code structure.
          </p>
          <div className="button-container">
            <button
              className="project-button"
              onClick={() =>
                window.open(
                  "https://github.com/Tristan-Pillay-07/Employee-Portal-Project",
                  "_blank",
                )
              }
            >
              Github
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6 single-project">
          <h2>MAUI Weather App</h2>
          <h4>.NET MAUI</h4>
          <p>
            This project is a .NET MAUI Weather Application integrated with the
            Open-Meteo API, designed to deliver real-time weather data through a
            clean and responsive cross-platform interface. Through this build, I
            have been strengthening my understanding of asynchronous programming
            (async/await) to handle API calls efficiently and ensure smooth user
            experiences. I have also been applying the MVVM
            (Model-View-ViewModel) architectural pattern to maintain a clear
            separation of concerns, improve code organization, and support
            scalability.
          </p>
          <div className="button-container">
            <button
              className="project-button"
              onClick={() =>
                window.open(
                  "https://github.com/Tristan-Pillay-07/Weather-App",
                  "_blank",
                )
              }
            >
              Github
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <a
            className="project-link"
            href="https://github.com/Tristan-Pillay-07/"
          >
            View Github Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
