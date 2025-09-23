import "./About.css";
import SeaRescue from "../../assets/SeaRescue.jpg";
import CV from "../../assets/TristanPillay_CV.pdf";

const About = () => {
  return (
    <div className="container-fluid about-body">
      <div className="row">
        <div className="col-12 col-md-6">
          <h3>About me</h3>
          <p>
            I'm a creative professional with a passion for design and software
            development. My diverse background, including roles in lifeguarding,
            mechanical engineering, and graphic design, has provided me with a
            unique perspective. I've honed my visual skills using tools like
            CorelDraw and Adobe Creative Suite, and I'm eager to apply this
            creativity within the structured, problem-solving world of code,
            exploring how software can bring innovative designs to life.
          </p>
          <br />
          <p>
            Beyond my professional pursuits, I'm deeply committed to community
            service and volunteer at the National Sea Rescue Institute (NSRI).
            This experience has instilled in me a strong sense of responsibility
            and a desire to help others. I'm passionate about water safety and
            contribute to the NSRI's mission of saving lives at sea.
          </p>
          <br />
          <p>
            I'm always eager to learn new skills and take on new challenges. I'm
            excited to connect with like-minded professionals and explore new
            opportunities.
          </p>
          <div className="cv-button-container">
            <a
              href="/TristanPillay_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="cv-button">Download CV</button>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <img src={SeaRescue} alt="Sea Rescue" className="about-image" />
        </div>
      </div>
    </div>
  );
};

export default About;
