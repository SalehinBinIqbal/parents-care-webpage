import About from './About/About'
import IconGrid from './IconGrid/IconGrid';
import Card from './Card/Card'
import Card2 from './Card2/Card2'
import Objective from './Objective/Objective';
import classes from './Body.module.css';

function Body(){
    return(
        <div className={classes.bodyContainer}>
            <About/>
            <IconGrid/>
            {/* <Card />
            <Card2/>
            <Objective/> */}
        </div>
    );
}

export default Body;