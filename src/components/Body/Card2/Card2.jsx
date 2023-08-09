import cardphoto1 from '../../../assets/cardimage1.png';
import cardphoto2 from '../../../assets/cardimage2.webp'
import classes from './Card2.module.css';

function Card2(){
    return(
        <div className={classes.cardContainer}>
            <div className={classes.cardContent}>
                <img src={cardphoto1} alt="" />
                <div className={classes.cardText}>
                    <div className={classes.bigText}>
                        What is Parents Care Plan?
                    </div>
                    <div className={classes.smallText}>
                        Parent care plan (PCP) is a comprehensive health plan for the aged parents or senior citizens which covers the primary & essential healthcare service needs! <br /> <br />
                        The Plan covers the services starting from online doctor support to Doctor & Nurse visit at home to emergency care coordination like hospital transfer.
                    </div>
                </div>
            </div>
            <div className={classes.cardContent}>
                <img src={cardphoto2} alt="" />
                <div className={classes.cardText}>
                    <div className={classes.bigText}>
                        Why Parents Care Plan?
                    </div>
                    <div className={classes.smallText}>
                        You are living away from your loved ones, but always tense for them? <br /> <br />
                        Don’t worry! Leave your tension to us, we provide the most reliable & caring Parents Care services to your loved ones, just like our own!   
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card2;