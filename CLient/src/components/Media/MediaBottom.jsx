import React from 'react';
import Img from "../../Images/Rectangle155.png";
import Img2 from "../../Images/Rectangle151.png";

const MediaBottom = () => {
    return ( 
        <div className="flex flex-col">
            <div className="text-3xl font-bold">
                <h1>Nullam Vehicula Ipsum A Arcu Cursus Vitae Congue Mauris</h1>
            </div>
            <div className="text-gray-700">
                <p>Having not yet visited Sector 10, follow these steps for a free upgrade.</p>
            </div>
            <div className="flex flex-wrap md:flex-no-wrap mt-2">
                <div className="flex justify-center items-center rounded-full">
                    <img src={Img} alt=""/>
                </div>
                <div className="ml-4 flex items-center">
                    <p className="text-gray-700 inline-block">By <p className="text-lg font-bold inline-block text-black">Shane Doe</p>  - Jan 14, 2021 - Updated: Feb 15, 2021 - 65 Comments - 6 Mins Read</p>
                </div>
            </div>
            <div className="my-3">
                <img src={Img2} alt="" className="w-full"/>
            </div>
        </div>
    );
}
 
export default MediaBottom;