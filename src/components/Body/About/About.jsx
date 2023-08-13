import photo1 from '../../../assets/cardimage1.png';
import photo2 from '../../../assets/cardimage2.webp';
import photo3 from '../../../assets/nurse-holding-senior-man-s-hands-comfort.jpg';
import photo4 from '../../../assets/objImage.jpg';
import classes from './About.module.css';

function About(){
    return(
        <div className={classes.aboutSectionContainer}>
            <div className={classes.textArea}>
                <p>About Parent Care Plan</p>
                <p>What is Parent Care Plan (PCP)?</p>
                <p>Parent care plan (PCP) is a comprehensive health plan for the aged parents or senior citizens which covers the primary & essential healthcare service needs!</p>
                <button>Learn More {'>'}</button>
            </div>
            <div className={classes.photoArea}>
                <div className={classes.stackedImage}>
                    <img src={photo1} alt="" />
                </div>
                <div className={classes.stackedImage}>
                    <img src={photo2} alt="" />
                </div>
                <div className={classes.stackedImage}>
                    <img src={photo3} alt="" />
                </div>
                <div className={classes.stackedImage}>
                    <img src={photo4} alt="" />
                </div>
            </div>
        </div>
    );
}

export default About;