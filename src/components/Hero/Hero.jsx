import photo from '../../assets/hero.jpg';
import classes from './Hero.module.css';

function Hero(){
    return(
        <div className={classes.carouselPhoto}>
            <img src={photo} alt="" />
            <div className={classes.carouselText}>
                <div className={classes.bigText}>
                    Comprehensive Healthcare solution for YOUR PARENTS!
                </div>
                <div className={classes.smallText}>
                    Plans starting at 1499 tk per month only
                </div>
            </div>
        </div>
    );
}

export default Hero;