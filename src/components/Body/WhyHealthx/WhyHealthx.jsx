import icon1 from "../../../assets/icons2/Health Manager Icon.svg";
import icon2 from "../../../assets/icons2/Doctors _ Caregivers Icon.svg";
import icon3 from "../../../assets/icons2/Caregivers Icon.svg";
import icon4 from "../../../assets/icons2/Doctors Icon.svg";
import icon5 from "../../../assets/icons2/Personalized Services Icon.svg";
import icon6 from "../../../assets/icons2/Simplified Process Icon.svg";
import classes from "./WhyHealthx.module.css";

function WhyHealthx() {
  return (
    <div className={classes.container}>
      <p className={classes.title}>Why HEALTHx?</p>
      <div className={classes.gridContainer}>
        <div className={classes.grid}>
          <div className={classes.iconContainer}>
            <img className={classes.icons} src={icon1} alt="" />
          </div>
          <div className={classes.textContainer1}>
            <p>We have 24/7 Dedicated Health Manager</p>
          </div>
        </div>
        <div className={classes.grid}>
          <div className={classes.iconContainer}>
            <img className={classes.icons} src={icon2} alt="" />
          </div>
          <div className={classes.textContainer2}>
            <p>24/7 Dedicated Doctors & Caregivers</p>
          </div>
        </div>
        <div className={classes.grid}>
          <div className={classes.iconContainer}>
            <img className={classes.icons} src={icon3} alt="" />
          </div>
          <div className={classes.textContainer3}>
            <p>Trusted & Certified Caregivers</p>
          </div>
        </div>
        <div className={classes.grid}>
          <div className={classes.iconContainer}>
            <img className={classes.icons} src={icon4} alt="" />
          </div>
          <div className={classes.textContainer4}>
            <p>Pool of 1000+ Doctors</p>
          </div>
        </div>
        <div className={classes.grid}>
          <div className={classes.iconContainer}>
            <img className={classes.icons} src={icon5} alt="" />
          </div>
          <div className={classes.textContainer5}>
            <p>We provide Personalized Services</p>
          </div>
        </div>
        <div className={classes.grid}>
          <div className={classes.iconContainer}>
            <img className={classes.icons} src={icon6} alt="" />
          </div>
          <div className={classes.textContainer6}>
            <p>Simplified process to avail services</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyHealthx;
