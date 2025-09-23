import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-body">
      <div className="container">
        <div className="row">
          {/* Left side */}
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Tristan Pillay. All rights
              reserved.
            </p>
          </div>

          {/* Right side */}
          <div className="col-md-6 text-center text-md-end">
            <a
              href="#projects"
              className="text-white text-decoration-none mx-2"
            >
              Projects
            </a>
            <a href="#about" className="text-white text-decoration-none mx-2">
              About
            </a>
            <a
              href="mailto:tristantpillay@gmail.com"
              className="text-white text-decoration-none mx-2"
            >
              Contact
            </a>
            <a
              href="https://www.linkedin.com/in/tristanpillay-4a5320162"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-decoration-none mx-2"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
