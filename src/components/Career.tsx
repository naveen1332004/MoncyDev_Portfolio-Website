import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor's, Computer Science</h4>
                <h5> Periyar University – Salem </h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed a Bachelor's degree in Computer Science with a strong foundation 
  in programming, data structures, and software development
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master’s Data Science Program</h4>
                <h5>Periyar University – Salem </h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Currently pursuing a Master’s in Data Science, focusing on machine learning, 
  data analytics, and visualization. Working on real-world projects involving 
  recommendation systems, image processing, and AI-driven solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SAP Business Technology Platform (Intern)</h4>
                <h5> </h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Worked as an SAP BTP Intern focusing on data analysis and cloud-based 
              application development to build insights-driven business solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
