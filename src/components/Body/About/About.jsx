import photo2 from "../../../assets/cardimage1.png";
import photo1 from "../../../assets/cardimage2.webp";
import photo3 from "../../../assets/nurse-holding-senior-man-s-hands-comfort.jpg";
import photo4 from "../../../assets/objImage.jpg";
import classes from "./About.module.css";

function About() {
  return (
    <div className={classes.aboutSectionContainer}>
      <div className={classes.lightColorContainer}>
        <div className={classes.textArea}>
          <p>About Parent Care Plan</p>
          <p>What is Parent Care Plan (PCP)?</p>
          <p>
            Parent care plan (PCP) is a comprehensive health plan for the aged
            parents or senior citizens which covers the primary & essential
            health care service needs! This plan covers the services starting
            from online doctor support to Doctor & Nurse visit at home.
          </p>
        </div>
        <div className={classes.photoArea}>
          <div className={classes.stackedImage}>
            <img src={photo1} alt="" />
          </div>
          <div className={classes.stackedImage}>
            <img src={photo2} alt="" />
          </div>
          <div className={classes.stackedImage}>
            <img src={photo3} alt="" />
          </div>
          <div className={classes.stackedImage}>
            <img src={photo4} alt="" />
          </div>
        </div>
      </div>
      <div className={classes.deepColorContainer}>
        <div className={classes.photoArea2}>
          <div className={classes.borderImage}>
            <img src={photo1} alt="" />
          </div>
        </div>
        <div className={classes.textArea2}>
          <p>Why Parent Care Plan is needed?</p>
          <p>
            You are living away from your loved ones, but always tense for them?
            <br />
            Don’t worry! Leave your tension to us, we provide the most reliable
            & caring Parents Care services to your loved ones, just like our
            own! Our dedicated ‘Health Manager’ will arrange visits in any major
            cities of the country.
            <br /> <br />
            For more information, &nbsp;
            <a href="">Book now</a> or call us at &nbsp;
            <a href="">+000008</a> and get a free consultation with our Care
            Expert.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
