import arrowIcon from "../../../assets/rightarrow.png";
import classes from "./Avail.module.css";

function Avail() {
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <p className={classes.title}>How to Avail The Plan</p>
        <p className={classes.subTitle}>
          Follow the simple 3 steps to avail your parent care plan
        </p>
      </div>
      <div className={classes.planContainer}>
        <div className={classes.plan}>
          <div className={classes.number}>
            <p>1</p>
          </div>
          <div className={classes.planText}>
            <p>Make a call to the Health Manager to activate your plan</p>
          </div>
        </div>
        <div className={classes.arrowIcon}>
          <img src={arrowIcon} alt="" />
        </div>
        <div className={classes.plan}>
          <div className={classes.number}>
            <p>2</p>
          </div>
          <div className={classes.planText}>
            <p>
              Our dedicated health manager will active your Parents Care Plan
            </p>
          </div>
        </div>
        <div className={classes.arrowIcon}>
          <img src={arrowIcon} alt="" />
        </div>
        <div className={classes.plan}>
          <div className={classes.number}>
            <p>3</p>
          </div>
          <div className={classes.planText}>
            <p>
              After activating your account, make a call the health manager when
              you need
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Avail;
