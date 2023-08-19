import { FaBangladeshiTakaSign } from "react-icons/fa6";
import classes from "./OfferCard2.module.css";

function OfferCard2() {
  return (
    <div className={classes.cardSection}>
      <div className={classes.cardSectionText}>
        <p className={classes.title}>Parent Care Plan (PCP) Offers</p>
        <p className={classes.subTitle}>Choose your best plan by month</p>
      </div>
      <div className={classes.cardContainer}>
        <div className={classes.cardBody}>
          <div className={classes.cardBodyTop}>
            <p>Regular Package</p>
            <a>View Details</a>
          </div>
          <div className={classes.cardBodyBottom}>
            <div className={classes.amountText}>
              <FaBangladeshiTakaSign className={classes.bdtIcon} />
              <p>1,499</p>
            </div>
            <button>Buy the plan</button>
          </div>
        </div>
        <div className={classes.cardBody}>
          <div className={classes.cardBodyTop}>
            <p>Basic Package</p>
            <a>View Details</a>
          </div>
          <div className={classes.cardBodyBottom}>
            <div className={classes.amountText}>
              <FaBangladeshiTakaSign className={classes.bdtIcon} />
              <p>3,999</p>
            </div>
            <button>Buy the plan</button>
          </div>
        </div>
        <div className={classes.cardBody}>
          <div className={classes.cardBodyTop}>
            <p>Standard Package</p>
            <a>View Details</a>
          </div>
          <div className={classes.cardBodyBottom}>
            <div className={classes.amountText}>
              <FaBangladeshiTakaSign className={classes.bdtIcon} />
              <p>7,999</p>
            </div>
            <button>Buy the plan</button>
          </div>
        </div>
        <div className={classes.cardBody}>
          <div className={classes.cardBodyTop}>
            <p>Premium Package</p>
            <a>View Details</a>
          </div>
          <div className={classes.cardBodyBottom}>
            <div className={classes.amountText}>
              <FaBangladeshiTakaSign className={classes.bdtIcon} />
              <p>16,999</p>
            </div>
            <button>Buy the plan</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferCard2;
