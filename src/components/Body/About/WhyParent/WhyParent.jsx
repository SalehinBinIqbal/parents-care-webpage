import handHolding from "../../../../assets/Parent/Nursing.webp";
import classes from "./WhyParent.module.css";

function WhyParent() {
  return (
    <div className={classes.container}>
      <div>
        <div className={classes.image}>
          <img src={handHolding} alt="" />
        </div>
      </div>
      <div className={classes.textBox}>
        <p className={classes.title}>Why Parent Care Plan is needed?</p>
        <p className={classes.description}>
          You are living away from your loved ones, but always tense for them?
          <br />
          Don’t worry! Leave your tension to us, we provide the most reliable &
          caring Parents Care services to your loved ones, just like our own!
          <br /> <br />
          For more information, &nbsp;
          <a href="">Book now</a> or call us at &nbsp;
          <a href="">+000008</a> and get a free consultation with our Care
          Expert.
        </p>
      </div>
    </div>
  );
}

export default WhyParent;
