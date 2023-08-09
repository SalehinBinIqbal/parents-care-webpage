import Card from './Card/Card'
import Card2 from './Card2/Card2'
import classes from './Body.module.css';

function Body(){
    return(
        <div className={classes.bodyContainer}>
            <Card />
            <Card2/>
        </div>
    );
}

export default Body;