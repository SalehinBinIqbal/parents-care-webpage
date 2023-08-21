import oldCouple from "../../../assets/Parent/Old.png";
import homeNursing from "../../../assets/Parent/Nursing.webp";
import handHolding from "../../../assets/Parent/Hand.jpg";
import doctorPatient from "../../../assets/Parent/Wheelchair.jpg";
import classes from "./About.module.css";

function About() {
  return (
    <div className={classes.aboutSection}>
      <div className={classes.firstContainer}>
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
        <div className={classes.photoGroup}>
          <div className={classes.imageContainer}>
            <img className={classes.topLeftImage} src={homeNursing} alt="" />
          </div>
          <div className={classes.imageContainer}>
            <img className={classes.topRightImage} src={oldCouple} alt="" />
          </div>
          <div className={classes.imageContainer}>
            <img className={classes.bottomLeftImage} src={handHolding} alt="" />
          </div>
          <div className={classes.imageContainer}>
            <img
              className={classes.bottomRightImage}
              src={doctorPatient}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={classes.secondContainer}>
        <div>
          <div className={classes.borderImage}>
            <img className={classes.floatingImage} src={handHolding} alt="" />
          </div>
        </div>
        <div className={classes.textAreaSmall}>
          <p className={classes.pcpNeedTitle}>
            Why Parent Care Plan is needed?
          </p>
          <p className={classes.pcpNeedDescription}>
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
