import React from 'react';
import Card1 from "../../Images/pu.jfif"
import Card2 from "../../Images/lgu.jfif"
import Card3 from "../../Images/cui.jpg"
import Crush from "../../Images/pulogo.png"
import Mcdonald from "../../Images/lgulogo.jfif"
import Pizza from "../../Images/cuilogo.png"

const Listed = () => {

    return ( 
        <div className="mb-10">
            <h2 className=" text-center font-bold text-3xl my-5">Top Rated</h2>
            <div className="flex justify-center mb-4"><hr className ="border-t-4 border-solid border-red-700 rounded-full w-16"/></div>
            <div className="flex flex-wrap justify-center">
                <div className="flex-col items-center bg-gray-200 rounded-lg m-6 max-w-lg">
                    <img src={Card1} alt="" className="relative rounded-t-lg"/>
                    <div className="flex justify-center items-center mb-10">
                        <div className="flex justify-center items-center rounded-full h-24 w-24 bg-white absolute">
                            <img src={Crush} alt="" className="w-16 h-16"/>
                        </div>
                    </div>
                    <div className="pt-5">
                        <h2 className="text-center pb-5 font-bold text-2xl">Punjab University</h2>
                        <p className="font-bold mb-5 px-8 text-justify">Established in 1882 at Lahore, the University of the Punjab is the largest and the oldest seat of higher learning in Pakistan. It was the first to be established in the sub-continent in Muslim majority area.</p>
                    </div>
                </div>
                <div className="flex-col items-center bg-gray-200 rounded-lg pb-10 m-6 max-w-lg">
                    <img src={Card2} alt="" className="relative rounded-t-lg"/>
                    <div className="flex justify-center items-center mb-10">
                        <div className="flex justify-center items-center rounded-full h-24 w-24 bg-white absolute">
                            <img src={Mcdonald} alt="" className="h-16 w-16"/>
                        </div>
                    </div>
                    <div className="pt-5">
                        <h2 className="text-center pb-5 font-bold text-2xl">Lahore Garrison University</h2>
                        <p className="text-justify font-bold mb-5 px-6">If you prefer to study in your own time and at your own speed then one of our e-learning packages may be right up your street. There is a third option, which is you like the sound of both but perhaps can’t attend all training sessions, this is when blended learning comes into its own.</p>
                    </div>
                </div>
                <div className="flex-col items-center bg-gray-200 rounded-lg pb-10 m-6 max-w-lg">
                    <img src={Card3} alt="" className="relative object-contain rounded-t-lg"/>
                    <div className="flex justify-center items-center mb-10">
                        <div className="flex justify-center items-center rounded-full h-24 w-24 bg-white absolute">
                            <img src={Pizza} alt="Pizza" className="rounded-full h-18 w-18" />
                        </div>
                    </div>
                    <div className="pt-5">
                        <h2 className="text-center pb-5 font-bold text-2xl">Comsats University</h2>
                        <p className="text-justify font-bold mb-5 px-8">COMSATS University Islamabad, Lahore Campus was established in January 2002. It is located at Defence Road off Raiwind Road Lahore. The campus is at 25 minutes drive from the main city. The campus is purpose built and spreads over 185 acres with a 400,000 sq. ft covered area.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Listed;