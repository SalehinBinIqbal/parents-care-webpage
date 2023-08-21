import healthManager from "../../../assets/Parent/Online.svg";
import visitHome from "../../../assets/Parent/Home.svg";
import onlineSupport from "../../../assets/Parent/Support.svg";
import delivery from "../../../assets/Parent/Delivery.svg";
import sampleCollect from "../../../assets/Parent/Sample.svg";
import healthCheck from "../../../assets/Parent/Checkup.svg";
import physiotherapy from "../../../assets/Parent/Physiotherapy.svg";
import psychology from "../../../assets/Parent/Psychological.svg";
import dietCare from "../../../assets/Parent/Diet.svg";
import priorityService from "../../../assets/Parent/Service.svg";
import ambulance from "../../../assets/Parent/Ambulance.svg";
import healthRecord from "../../../assets/Parent/Records.svg";
import classes from "./PersonalizedCare.module.css";

function PersonalizedCare() {
  return (
    <div className={classes.container}>
      <p className={classes.title}>Personalized Care for Your Parents</p>
      <div className={classes.iconGrid}>
        <div className={classes.iconSection}>
          <div className={classes.iconContainer}>
            <img src={healthManager} alt="" />
          </div>
          <div className={classes.textBox}>Dedicated Health Manager</div>
        </div>
        <div className={classes.iconSection}>
          <div className={classes.iconContainer}>
            <img src={visitHome} alt="" />
          </div>
          <div className={classes.textBox}>Doctor Visit at Home</div>
        </div>
        <div className={classes.iconSection}>
          <div className={classes.iconContainer}>
            <img src={onlineSupport} alt="" />
          </div>
          <div className={classes.textBox}>Online Doctor Support</div>
        </div>
        <div className={classes.iconSection}>
          <div className={classes.iconContainer}>
            <img src={delivery} alt="" />
          </div>
          <div className={classes.textBox}>Medicine Delivery</div>
        </div>
        <div className={classes.iconSection}>
          <div className={classes.iconContainer}>
            <img src={sampleCollect} alt="" />
          </div>
          <div className={classes.textBox}>Sample Collection at Home</div>
        </div>
        <div className={classes.iconSection}>
          <div className={classes.iconContainer}>
            <img src={healthCheck} alt="" />
          </div>
          <div className={classes.textBox}>Health Checkup at Home</div>
        </div>
        <div className={classes.iconSection}>
          <div className={classes.iconContainer}>
            <img src={physiotherapy} alt="" />
          </div>
          <div className={classes.textBox}>Physiotherapy at Home</div>
        </div>
        <div className={classes.iconSection}>
          <div className={classes.iconContainer}>
            <img src={psychology} alt="" />
          </div>
          <div className={classes.textBox}>Psychological Support</div>
        </div>
        <div className={classes.iconSection}>
          <div className={classes.iconContainer}>
            <img src={dietCare} alt="" />
          </div>
          <div className={classes.textBox}>Diet & Nutrition Care</div>
        </div>
        <div className={classes.iconSection}>
          <div className={classes.iconContainer}>
            <img src={priorityService} alt="" />
          </div>
          <div className={classes.textBox}>Priority Service at Hospital</div>
        </div>
        <div className={classes.iconSection}>
          <div className={classes.iconContainer}>
            <img src={ambulance} alt="" />
          </div>
          <div className={classes.textBox}>Ambulance/Blood Donor Support</div>
        </div>
        <div className={classes.iconSection}>
          <div className={classes.iconContainer}>
            <img src={healthRecord} alt="" />
          </div>
          <div className={classes.textBox}>Digital Health Records</div>
        </div>
      </div>
    </div>
  );
}

export default PersonalizedCare;
