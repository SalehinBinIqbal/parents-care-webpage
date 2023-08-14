import icon1 from "../../../assets/icons/Health Manager Icon.svg";
import icon2 from "../../../assets/icons/Doctor Visit Home Icon.svg";
import icon3 from "../../../assets/icons/Online Doctor Support Icon.svg";
import icon4 from "../../../assets/icons/Medicine Delivery Icon.svg";
import icon5 from "../../../assets/icons/Sample Collection Home Icon.svg";
import icon6 from "../../../assets/icons/Health Checkup at Home.svg";
import icon7 from "../../../assets/icons/Physiotherapy at Home Icon.svg";
import icon8 from "../../../assets/icons/Psychological Support.svg";
import icon9 from "../../../assets/icons/Diet _ Nutrition Care Icon.svg";
import icon10 from "../../../assets/icons/Priority Service Hospital Icon.svg";
import icon11 from "../../../assets/icons/Blood Donor Icon.svg";
import icon12 from "../../../assets/icons/Digital Health Record Icon.svg";
import classes from "./IconGrid.module.css";

function IconGrid() {
  return (
    <div className={classes.iconGridContainer}>
      <div className={classes.iconGridText}>
        Personalized Care for Your Parents
      </div>
      <div className={classes.iconGrid}>
        <div className={classes.iconSection}>
          <div className={classes.iconContainer}>
            <img src={icon1} alt="" />
          </div>
          <div className={classes.iconTextContainer}>
            Dedicated Health Manager
          </div>
        </div>
        <div className={classes.iconSection}>
          <div className={classes.iconContainer}>
            <img src={icon2} alt="" />
          </div>
          <div className={classes.iconTextContainer}>Doctor Visit at Home</div>
        </div>
        <div className={classes.iconSection}>
          <div className={classes.iconContainer}>
            <img src={icon3} alt="" />
          </div>
          <div className={classes.iconTextContainer}>Online Doctor Support</div>
        </div>
        <div className={classes.iconSection}>
          <div className={classes.iconContainer}>
            <img src={icon4} alt="" />
          </div>
          <div className={classes.iconTextContainer}>Medicine Delivery</div>
        </div>
        <div className={classes.iconSection}>
          <div className={classes.iconContainer}>
            <img src={icon5} alt="" />
          </div>
          <div className={classes.iconTextContainer}>
            Sample Collection at Home
          </div>
        </div>
        <div className={classes.iconSection}>
          <div className={classes.iconContainer}>
            <img src={icon6} alt="" />
          </div>
          <div className={classes.iconTextContainer}>
            Health Checkup at Home
          </div>
        </div>
        <div className={classes.iconSection}>
          <div className={classes.iconContainer}>
            <img src={icon7} alt="" />
          </div>
          <div className={classes.iconTextContainer}>Physiotherapy at Home</div>
        </div>
        <div className={classes.iconSection}>
          <div className={classes.iconContainer}>
            <img src={icon8} alt="" />
          </div>
          <div className={classes.iconTextContainer}>Psychological Support</div>
        </div>
        <div className={classes.iconSection}>
          <div className={classes.iconContainer}>
            <img src={icon9} alt="" />
          </div>
          <div className={classes.iconTextContainer}>Diet & Nutrition Care</div>
        </div>
        <div className={classes.iconSection}>
          <div className={classes.iconContainer}>
            <img src={icon10} alt="" />
          </div>
          <div className={classes.iconTextContainer}>
            Priority Service at Hospital
          </div>
        </div>
        <div className={classes.iconSection}>
          <div className={classes.iconContainer}>
            <img src={icon11} alt="" />
          </div>
          <div className={classes.iconTextContainer}>
            Ambulance/Blood Donor Support
          </div>
        </div>
        <div className={classes.iconSection}>
          <div className={classes.iconContainer}>
            <img src={icon12} alt="" />
          </div>
          <div className={classes.iconTextContainer}>
            Digital Health Records
          </div>
        </div>
      </div>
    </div>
  );
}

export default IconGrid;
