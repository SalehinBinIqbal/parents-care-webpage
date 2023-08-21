import WhatParent from "./WhatParent/WhatParent";
import WhyParent from "./WhyParent/WhyParent";
import classes from "./About.module.css";

function About() {
  return (
    <div className={classes.aboutSection}>
      <WhatParent />
      <WhyParent />
    </div>
  );
}

export default About;
