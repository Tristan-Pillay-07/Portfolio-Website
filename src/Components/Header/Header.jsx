import "./Header.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MeImage from "../../assets/Me.png";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <div className="header">
      <div className="container-flex">
        <div className="row">
          <div className="col-12 col-md-6 text">
            <div className="title">
              <Typewriter
                options={{
                  strings: ["< Hi... />", "I'm Tristan!"],
                  autoStart: true,
                  loop: true,
                  cursor: "|",
                }}
              />
            </div>
            <p className="description">
              I am a junior developer eager to build and develop my skills in
              software development, with experience in .NET, Python, JavaScript,
              and web technologies.
              <br />
              This website was built with React JS.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <div className="imageMe">
              <img className="image" src={MeImage} alt="image of me" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
