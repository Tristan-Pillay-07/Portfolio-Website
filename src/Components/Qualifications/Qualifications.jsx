import "./Qualifications.css";
import Building from "../../assets/building.jpg";

const Qualifications = () => {
  return (
    <div className="container-fluid quali-body" id="qualifications">
      <div className="row">
        <div className="col-12 col-md-4 item-column">
          <img className="quali-image" src={Building} alt="image of me" />
        </div>
        <div className="col-12 col-md-8 item-column">
          <div className="item-block">
            <h1>Qualifications and Courses</h1>
            <h3>Education</h3>
            <ul className="list-items">
              <li>Jbay Academy Highschool - Matriculation 2019</li>
              <li>
                Jbay Academy Technical College - N6 Engineering Sciences 2021
              </li>
            </ul>
          </div>
          <div className="item-block">
            <h3>Courses</h3>
            <ul className="list-items">
              <li>Harvard CS50x - Introduction to Computer Science 2025</li>
              <li>Codecademy - React JS</li>
              <li>Codecademy - Learn C#</li>
              <li>Codecademy - Git & Github</li>
              <li>Codecademy - Python 3</li>
              <li>Codecademy - Javascript</li>
              <li>Codecademy - Command line</li>
              <li>Codecademy - Introduction to Cybersecurity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
