import plusIcon from "../../../assets/plus.png";
import classes from "./FAQ.module.css";

function FAQ() {
  return (
    <div className={classes.container}>
      <p className={classes.title}>Frequently Asked Questions</p>
      <div className={classes.flexContainer}>
        <div className={classes.flexBox}>
          <p>How can I send money?</p>
          <img src={plusIcon} alt="" />
        </div>
        <div className={classes.flexBox}>
          <p>How many times can I see the doctor?</p>
          <img src={plusIcon} alt="" />
        </div>
        <div className={classes.flexBox}>
          <p>Do you have to pay to see a doctor every time?</p>
          <img src={plusIcon} alt="" />
        </div>
        <div className={classes.flexBox}>
          <p>How to activate expatriate health paackage?</p>
          <img src={plusIcon} alt="" />
        </div>
        <div className={classes.flexBox}>
          <p>How to contact you?</p>
          <img src={plusIcon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
