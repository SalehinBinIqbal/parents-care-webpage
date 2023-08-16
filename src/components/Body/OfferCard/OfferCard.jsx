import { useState } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { MdDone } from "react-icons/md";
import classes from "./OfferCard.module.css";

function OfferCard() {
  let text = "View Details";
  const [viewDetailsList1, changeViewDetailsList1] = useState(
    classes.cardBodyMidHide
  );
  const showList1 = () => {
    changeViewDetailsList1(classes.cardBodyMidShow);
  };
  const [viewDetailsList2, changeViewDetailsList2] = useState(
    classes.cardBodyMidHide
  );
  const showList2 = () => {
    changeViewDetailsList2(classes.cardBodyMidShow);
  };
  const [viewDetailsList3, changeViewDetailsList3] = useState(
    classes.cardBodyMidHide
  );
  const showList3 = () => {
    changeViewDetailsList3(classes.cardBodyMidShow);
  };
  const [viewDetailsList4, changeViewDetailsList4] = useState(
    classes.cardBodyMidHide
  );
  const showList4 = () => {
    changeViewDetailsList4(classes.cardBodyMidShow);
  };
  return (
    <div className={classes.cardSection}>
      <div className={classes.cardSectionText}>
        <p>Parent Care Plan (PCP) Offers</p>
        <p>Choose your best plan by month</p>
      </div>
      <div className={classes.cardContainer}>
        <div className={classes.cardBody}>
          <div className={classes.cardBodyTop}>
            <p>Regular Package</p>
            <a onClick={showList1}>View Details</a>
          </div>
          {/* <div className={viewDetailsList1}>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>4 Tele Consultation with Dedicated Family Doctor</p>
            </div>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>
                1 Online Diet Counseling / 1 Psychologist Video - Consultations
              </p>
            </div>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>10% Discount on Medicine Delivery with Free Delivery Charge</p>
            </div>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>40% Discount on Pathology Test at Home</p>
            </div>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>
                Special Discount on Treatment & Priority Services at Healthx
                Partner Hospital
              </p>
            </div>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>Emergency Coordination (Ambulance, Blood Donor)</p>
            </div>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>1 Monthly Update to Family Attendant from Doctor</p>
            </div>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>Health Record Storage at Healthx - ‘My Health Portal’</p>
            </div>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>Dedicated Health manager for Coordination</p>
            </div>
          </div> */}
          <div className={classes.cardBodyBottom}>
            <div className={classes.amountText}>
              {/* <FaBangladeshiTakaSign className={classes.bdtIcon} /> */}
              <p>1,499</p>
            </div>
            <button>Buy the plan</button>
          </div>
        </div>
        <div className={classes.cardBody}>
          <div className={classes.cardBodyTop}>
            <p>Basic Package</p>
            <a onClick={showList2}>View Details</a>
          </div>
          {/* <div className={viewDetailsList2}>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>4 Tele Consultation with Dedicated Family Doctor</p>
            </div>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>
                1 Online Diet Counseling / 1 Psychologist Video - Consultations
              </p>
            </div>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>10% Discount on Medicine Delivery with Free Delivery Charge</p>
            </div>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>40% Discount on Pathology Test at Home</p>
            </div>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>
                Special Discount on Treatment & Priority Services at Healthx
                Partner Hospital
              </p>
            </div>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>Emergency Coordination (Ambulance, Blood Donor)</p>
            </div>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>1 Monthly Update to Family Attendant from Doctor</p>
            </div>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>Health Record Storage at Healthx - ‘My Health Portal’</p>
            </div>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>Dedicated Health manager for Coordination</p>
            </div>
          </div> */}
          <div className={classes.cardBodyBottom}>
            <div className={classes.amountText}>
              {/* <FaBangladeshiTakaSign className={classes.bdtIcon} /> */}
              <p>3,999</p>
            </div>
            <button>Buy the plan</button>
          </div>
        </div>
        <div className={classes.cardBody}>
          <div className={classes.cardBodyTop}>
            <p>Standard Package</p>
            <a onClick={showList3}>View Details</a>
          </div>
          {/* <div className={viewDetailsList3}>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>4 Tele Consultation with Dedicated Family Doctor</p>
            </div>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>
                1 Online Diet Counseling / 1 Psychologist Video - Consultations
              </p>
            </div>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>10% Discount on Medicine Delivery with Free Delivery Charge</p>
            </div>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>40% Discount on Pathology Test at Home</p>
            </div>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>
                Special Discount on Treatment & Priority Services at Healthx
                Partner Hospital
              </p>
            </div>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>Emergency Coordination (Ambulance, Blood Donor)</p>
            </div>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>1 Monthly Update to Family Attendant from Doctor</p>
            </div>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>Health Record Storage at Healthx - ‘My Health Portal’</p>
            </div>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>Dedicated Health manager for Coordination</p>
            </div>
          </div> */}
          <div className={classes.cardBodyBottom}>
            <div className={classes.amountText}>
              {/* <FaBangladeshiTakaSign className={classes.bdtIcon} /> */}
              <p>7,999</p>
            </div>
            <button>Buy the plan</button>
          </div>
        </div>
        <div className={classes.cardBody}>
          <div className={classes.cardBodyTop}>
            <p>Premium Package</p>
            <a onClick={showList4}>View Details</a>
          </div>
          {/* <div className={viewDetailsList4}>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>4 Tele Consultation with Dedicated Family Doctor</p>
            </div>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>
                1 Online Diet Counseling / 1 Psychologist Video - Consultations
              </p>
            </div>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>10% Discount on Medicine Delivery with Free Delivery Charge</p>
            </div>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>40% Discount on Pathology Test at Home</p>
            </div>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>
                Special Discount on Treatment & Priority Services at Healthx
                Partner Hospital
              </p>
            </div>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>Emergency Coordination (Ambulance, Blood Donor)</p>
            </div>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>1 Monthly Update to Family Attendant from Doctor</p>
            </div>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>Health Record Storage at Healthx - ‘My Health Portal’</p>
            </div>
            <div className={classes.cardBodyMidContent}>
              <MdDone className={classes.listIcon} />
              <p>Dedicated Health manager for Coordination</p>
            </div>
          </div> */}
          <div className={classes.cardBodyBottom}>
            <div className={classes.amountText}>
              {/* <FaBangladeshiTakaSign className={classes.bdtIcon} /> */}
              <p>16,999</p>
            </div>
            <button>Buy the plan</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
