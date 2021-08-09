import React from 'react';
import { Link } from 'react-router-dom';
import Calender from "../../Images/asset6.png"

const LeftMedia = (props) => {
    return ( 
        <div className="flex justify-evenly md:flex-no-wrap flex-wrap">
            <div className="rounded-lg w-2/3 mb-2">
                <img src={props.source} alt=""/>
            </div>
            <div className="felx flex-col ml-4">
                <h1 className="font-bold mb-2 text-3xl">{props.heading}</h1>
                <div className="flex mb-4">
                    <img src={Calender} alt="" className="w-6 h-6"/>
                    <time className="ml-2 text-red-700 font-bold">02-02-2021</time>
                </div>
                <div>
                    <p className="text-gray-600">Laculis eu non diam phasellus vestibulum. Felis donec et odio pellentesque diam volutpat commodo sed. Nullam vehicula ipsum a arcu cursus vitae congue mauris. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Justo nec ultrices dui sapien. Feugiat in fermentum posuere urna nec tincidunt. Bibendum at varius vel pharetra vel turpis. Posuere morbi leo urna molestie at elementum. Mauris cursus mattis molestie a iaculis at erat. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Sit amet porttitor eget dolor morbi non arcu risus. Vel risus commodo viverra maecenas accumsan lacus....</p>
                </div>
                <div className="flex justify-end">
                    <Link to="/news/newsDetails" className="p-3 bg-none text-red-700"> Read More</Link>
                </div>
            </div>
        </div>
    );
}
 
export default LeftMedia;