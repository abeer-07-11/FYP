import React from 'react';
import UpperSlider from "../Slider/UpperSlider";
import LatestDegree  from "../LatestDegree/LatestDegree";
import Rated from "../Rated/Rated";
import About from "../Media/About";

const Amaken = () => {
    return ( 
        <div>
            <UpperSlider/>
            <LatestDegree/>
            <Rated/>
            <About/>
        </div>
     );
}
 
export default Amaken;