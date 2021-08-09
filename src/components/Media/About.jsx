import React from 'react';
import styled from "styled-components"
import LowerSlider from "../Slider/LowerSlider";

const MediaRight = () => {
     return (
        <div> 
            <H2 className="mb-2 mt-8 ml-8">ABOUT US</H2>
            <div className="focus:sr-onlyflex flex-col md:flex-row mb-10">
                <div className="flex flex-col p-10 order-1">
                    <h2 className="font-bold text-2xl mb-10">Academic Program Finder & Recommender</h2>
                    <p className="text-gray-600 mb-5 text-justify">APF&R is a website and mobile application purposed to lead the students about their higher studies and also provide information about the colleges / universities related to their field. The APF&R website and mobile application will let you to search for the most appropriate programs from a collection of courses available in colleges and universities. This website and mobile application will help you to search the shortlisted programs directly to your student in one go.</p>
                    <div className="flex mt-4">
                        <hr className="border-b-4 border-t-2 border-solid border-gray-700 rounded-full w-4"/>
                        <hr className="border-b-4 border-t-2 border-solid border-red-700 rounded-full w-8 mx-1"/>
                        <hr className="border-b-4 border-t-2 border-solid border-gray-700 rounded-full w-4"/>
                    </div>
                </div>
            </div>
            <LowerSlider/>
        </div>
     );
}
 
export default MediaRight;

const Image = styled.div`
    height: 450px;

    @media (max-width: 768px){
        height: 12rem;
    }
`;

const H2 = styled.h2`
    font-family: Montserrat;
    font-size: 80px; 
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 2px lightgray;

    @media (max-width:768px){
        font-size: 50px;
    }
`;