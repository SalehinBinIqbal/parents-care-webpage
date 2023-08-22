import healthManager from "../../../assets/Parent/Managers.png";
import caregivers from "../../../assets/Parent/Caregivers.png";
import trustedCare from "../../../assets/Parent/Care.png";
import doctor from "../../../assets/Parent/Doctor.png";
import service from "../../../assets/Parent/Personalized.png";
import process from "../../../assets/Parent/Process.png";
import classes from "./WhyHealthx.module.css";

function WhyHealthx() {
  return (
    <div className={classes.container}>
      <p className={classes.title}>Why HEALTHx?</p>
      <div className={classes.gridContainer}>
        <div className={classes.itemBox}>
          <div className={classes.iconContainer}>
            <img src={healthManager} alt="" />
          </div>
          <div className={classes.textBoxBg}>
            <p className={classes.text}>
              We have 24/7 Dedicated Health Manager
            </p>
          </div>
        </div>
        <div className={classes.itemBox}>
          <div className={classes.iconContainer}>
            <img src={caregivers} alt="" />
          </div>
          <div className={classes.textBox}>
            <p className={classes.text}>24/7 Dedicated Doctors & Caregivers</p>
          </div>
        </div>
        <div className={classes.itemBox}>
          <div className={classes.iconContainer}>
            <img src={trustedCare} alt="" />
          </div>
          <div className={classes.textBoxBg}>
            <p className={classes.text}>Trusted & Certified Caregivers</p>
          </div>
        </div>
        <div className={classes.itemBox}>
          <div className={classes.iconContainer}>
            <img src={doctor} alt="" />
          </div>
          <div className={classes.textBox}>
            <p className={classes.text}>Pool of 1000+ Doctors</p>
          </div>
        </div>
        <div className={classes.itemBox}>
          <div className={classes.iconContainer}>
            <img src={service} alt="" />
          </div>
          <div className={classes.textBoxBg}>
            <p className={classes.text}>We provide Personalized Services</p>
          </div>
        </div>
        <div className={classes.itemBox}>
          <div className={classes.iconContainer}>
            <img src={process} alt="" />
          </div>
          <div className={classes.textBox}>
            <p className={classes.text}>Simplified process to avail services</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyHealthx;
