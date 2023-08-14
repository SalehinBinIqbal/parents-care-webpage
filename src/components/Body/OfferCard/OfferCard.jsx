import classes from "./OfferCard.module.css";

function OfferCard() {
  return (
    <div className={classes.cardSection}>
      <div className={classes.cardSectionText}>
        <div className={classes.cardSectionBigText}>
          Parent Care Plan (PCP) Offers
        </div>
        <div className={classes.cardSectionSmallText}>
          Choose your best plan by month
        </div>
      </div>
      <div className={classes.cardContainer}>
        <div className={classes.card}></div>
      </div>
    </div>
  );
}

export default OfferCard;
