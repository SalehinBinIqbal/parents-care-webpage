import image from '../../../assets/objImage.jpg'
import classes from './Objective.module.css';


function Objective(){
    return(
        <>
        <div className={classes.objText}>
            Our main objective of ‘Parents Care’ is to keep your loved parents well & thus bring peace of mind for you.
        </div>
        <div className={classes.objImage}>
            <img src={image} alt="" />
            <div className={classes.imgText}>
                Our dedicated ‘Health Manager’ will arrange visits of family general physicians (GP), trusted & trained nurses, attendants, medical supplies and rehabilitation support in any major cities of the country. 
            </div>
        </div>
        </>
    );
}

export default Objective;