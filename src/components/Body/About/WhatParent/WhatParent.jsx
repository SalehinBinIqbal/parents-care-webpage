import oldCouple from "../../../../assets/Parent/Old.png";
import homeNursing from "../../../../assets/Parent/Nursing.webp";
import handHolding from "../../../../assets/Parent/Hand.jpg";
import doctorPatient from "../../../../assets/Parent/Wheelchair.jpg";

import classes from "./WhatParent.module.css";

function WhatParent() {
  return (
    <div className={classes.container}>
      <div>
        <p className={classes.title}>About Parent Care Plan</p>
        <p className={classes.boldTitle}>What is Parent Care Plan (PCP)?</p>
        <p className={classes.description}>
          Parent care plan (PCP) is a comprehensive health plan for the aged
          parents or senior citizens which covers the primary & essential health
          care service needs!
          <br /> <br />
          This plan covers the services starting from online doctor support to
          Doctor & Nurse visit at home to emergency care coordination like
          hospital transfer.
        </p>
      </div>
      <div className={classes.photos}>
        <img className={classes.topLeftImage} src={homeNursing} alt="" />
        <img className={classes.topRightImage} src={oldCouple} alt="" />
        <img className={classes.bottomLeftImage} src={handHolding} alt="" />
        <img className={classes.bottomRightImage} src={doctorPatient} alt="" />
      </div>
    </div>
  );
}
export default WhatParent;
