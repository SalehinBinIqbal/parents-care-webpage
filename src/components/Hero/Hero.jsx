import hero from "../../assets/hero.jpg";
import classes from "./Hero.module.css";

function Hero() {
  return (
    <div className={classes.heroSection}>
      <img src={hero} alt="" />
      <div className={classes.heroText}>
        <p className={classes.heroTitle}>
          Comprehensive Healthcare Solution for YOUR PARENTS!
        </p>
        <p className={classes.herodescription}>
          Plans starting at 1499 tk per month only
        </p>
      </div>
    </div>
  );
}

export default Hero;
