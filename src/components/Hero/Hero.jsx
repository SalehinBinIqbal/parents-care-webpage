import photo from '../../assets/hero.jpg';
import classes from './Hero.module.css';

function Hero(){
    return(
        <div className={classes.carouselPhoto}>
            <img src={photo} alt="" />
            <div className={classes.carouselText}>
                <p className={classes.bigText}>Comprehensive Healthcare Solution for YOUR PARENTS!</p>
                <p className={classes.smallText}>Plans starting at 1499 tk per month only</p>
            </div>
        </div>
    );
}

export default Hero;