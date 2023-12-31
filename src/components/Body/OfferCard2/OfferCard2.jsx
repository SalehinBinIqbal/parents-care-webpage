import { FaBangladeshiTakaSign } from "react-icons/fa6";
import classes from "./OfferCard2.module.css";

function OfferCard2() {
  return (
    <div className={classes.cardSection}>
      <div className={classes.cardText}>
        <p className={classes.title}>Parent Care Plan (PCP) Offers</p>
        <p className={classes.subTitle}>Choose your best plan by month</p>
      </div>
      <div className={classes.cardContainer}>
        <div className={classes.cardBody}>
          <div className={classes.cardBodyTop}>
            <p className={classes.packageName}>Regular Package</p>
            <a className={classes.detailsLink}>View Details</a>
          </div>
          <div className={classes.cardBodyBottom}>
            <div className={classes.amountText}>
              <FaBangladeshiTakaSign className={classes.bdtIcon} />
              <p className={classes.text}>1,499</p>
            </div>
            <button className={classes.buyButton}>Buy the plan</button>
          </div>
        </div>
        <div className={classes.cardBody}>
          <div className={classes.cardBodyTop}>
            <p className={classes.packageName}>Basic Package</p>
            <a className={classes.detailsLink}>View Details</a>
          </div>
          <div className={classes.cardBodyBottom}>
            <div className={classes.amountText}>
              <FaBangladeshiTakaSign className={classes.bdtIcon} />
              <p className={classes.text}>3,999</p>
            </div>
            <button className={classes.buyButton}>Buy the plan</button>
          </div>
        </div>
        <div className={classes.cardBody}>
          <div className={classes.cardBodyTop}>
            <p className={classes.packageName}>Standard Package</p>
            <a className={classes.detailsLink}>View Details</a>
          </div>
          <div className={classes.cardBodyBottom}>
            <div className={classes.amountText}>
              <FaBangladeshiTakaSign className={classes.bdtIcon} />
              <p className={classes.text}>7,999</p>
            </div>
            <button className={classes.buyButton}>Buy the plan</button>
          </div>
        </div>
        <div className={classes.cardBody}>
          <div className={classes.cardBodyTop}>
            <p className={classes.packageName}>Premium Package</p>
            <a className={classes.detailsLink}>View Details</a>
          </div>
          <div className={classes.cardBodyBottom}>
            <div className={classes.amountText}>
              <FaBangladeshiTakaSign className={classes.bdtIcon} />
              <p className={classes.text}>16,999</p>
            </div>
            <button className={classes.buyButton}>Buy the plan</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferCard2;
