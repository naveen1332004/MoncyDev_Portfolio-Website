import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          
          {/* Project 1 */}
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>Smart India Hackathon 2025</h4>
                  <p>AI/ML • Video Analytics</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, OpenCV, Machine Learning, Cloud</p>
              <p>
                Built an AI/ML-based video analysis pipeline for surveillance data.
                Improved processing throughput by 30% and reduced latency using
                optimized preprocessing techniques. Designed a scalable cloud
                architecture and collaborated in a 6-member team to deliver a
                working prototype within 36 hours.
              </p>
            </div>
            <WorkImage image="https://www.uxdt.nic.in/wp-content/uploads/2025/07/smart-india-hackathon-smart-india-hackathon.jpg" alt="" />
          </div>

          {/* Project 2 */}
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>AI Medical Chatbot</h4>
                  <p>NLP • LLM</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, BERT, GPT, LLaMA</p>
              <p>
                Developed an AI-powered medical chatbot using NLP and LLM models.
                Achieved over 90% accuracy in medical entity recognition, enabling
                reliable and real-time responses for healthcare-related queries.
              </p>
            </div>
            <WorkImage image="https://aisera.com/wp-content/uploads/2024/08/ai-chatbot-for-healthcare-300x158.png" alt="" />
          </div>

          {/* Project 3 */}
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>Fashion Recommender System</h4>
                  <p>Computer Vision</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, CNN, ResNet50, Streamlit</p>
              <p>
                Built an image-based recommendation system to suggest visually
                similar fashion items. Used CNN-based feature extraction and
                optimized the pipeline to deliver results in under 1.5 seconds.
              </p>
            </div>
            <WorkImage image="https://shafiqulai.github.io/img/blog_7/thumbnail.webp" alt="" />
          </div>

          {/* Project 4 */}
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>04</h3>
                <div>
                  <h4>Customer Churn Insights</h4>
                  <p>Data Analytics</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>SQL, Python, Power BI</p>
              <p>
                Performed exploratory data analysis and feature engineering to
                identify customer churn patterns. Built interactive dashboards to
                visualize key metrics and support business decision-making.
              </p>
            </div>
            <WorkImage image="https://blog-static.userpilot.com/blog/wp-content/uploads/2022/11/Customer-Churn-Data-Insights-How-to-Conduct-Customer-Churn-Analysis_02469eaf4eddb7ad6ba63852cd17329e_2000.png" alt="" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Work;