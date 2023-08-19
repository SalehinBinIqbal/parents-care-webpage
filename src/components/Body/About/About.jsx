import topRightPhoto from "../../../assets/cardimage1.png";
import topLeftPhoto from "../../../assets/cardimage2.webp";
import bottomLeftPhoto from "../../../assets/nurse-holding-senior-man-s-hands-comfort.jpg";
import bottomRightPhoto from "../../../assets/objImage.jpg";
import classes from "./About.module.css";

function About() {
  return (
    <div className={classes.aboutSection}>
      <div className={classes.lightContainer}>
        <div className={classes.textArea}>
          <p className={classes.title}>About Parent Care Plan</p>
          <p className={classes.boldTitle}>What is Parent Care Plan (PCP)?</p>
          <p className={classes.description}>
            Parent care plan (PCP) is a comprehensive health plan for the aged
            parents or senior citizens which covers the primary & essential
            health care service needs!
            <br /> <br />
            This plan covers the services starting from online doctor support to
            Doctor & Nurse visit at home to emergency care coordination like
            hospital transfer.
          </p>
        </div>
        <div className={classes.photoArea}>
          <div className={classes.stackedImage}>
            <img className={classes.topLeftImage} src={topLeftPhoto} alt="" />
          </div>
          <div className={classes.stackedImage}>
            <img className={classes.topRightImage} src={topRightPhoto} alt="" />
          </div>
          <div className={classes.stackedImage}>
            <img
              className={classes.bottomLeftImage}
              src={bottomLeftPhoto}
              alt=""
            />
          </div>
          <div className={classes.stackedImage}>
            <img
              className={classes.bottomRightImage}
              src={bottomRightPhoto}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={classes.deepContainer}>
        <div className={classes.photoArea2}>
          <div className={classes.borderImage}>
            <img src={topLeftPhoto} alt="" />
          </div>
        </div>
        <div className={classes.textArea2}>
          <p>Why Parent Care Plan is needed?</p>
          <p>
            You are living away from your loved ones, but always tense for them?
            <br />
            Don’t worry! Leave your tension to us, we provide the most reliable
            & caring Parents Care services to your loved ones, just like our
            own!
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
