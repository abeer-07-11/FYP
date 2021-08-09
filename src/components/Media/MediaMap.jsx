import { makeStyles } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import React from 'react';
import Img from "../../Images/Rectangle212.png"


const useStyles = makeStyles({
    rating :{
        color:"red",
    }
})
const MediaMap = () => {
    const classes = useStyles();
    
    return ( 
        <div className="flex justify-around flex-wrap">
            <div className="flex flex-col max-w-xs md:max-w-lg mb-4">  
                <div className="flex justify-between rounded-full bg-gray-200 h-16 p-4 w-full">
                    <input type="text" name="" id="" placeholder="Search Here" className="bg-gray-200 w-full border-none"/>
                    <svg className="text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div className="p-4 bg-gray-100 flex flex-col md:flex-row mt-4 rounded-lg mb-4 ">
                    <div>
                        <img src={Img} alt=""/>
                    </div>
                    <div className="flex-col ml-3">
                        <div className="flex justify-between mb-2">
                            <h1 className="font-semibold">Original Wings & Rings - Dubai</h1>
                            <p className="text-red-700 font-semibold">(9.5km)</p>
                        </div>
                        <div className="flex mb-2">
                            <Rating  className = {classes.rating} size="small" max={4}/>
                            <p className="ml-2 text-gray-700">2.9 (195 Reviews)</p>
                        </div>
                        <p className="mb-4">Brazilian · Dubai Mall - Sheikh Mohammed bin Rashid Blvd Closed · Opens at 11:30 AM</p>
                        <div className="flex justify-evenly">
                            <button className="rounded-full text-gray-700 bg-white w-20 h-8">Foodie</button>
                            <button className="rounded-full text-gray-700 bg-white w-20 h-8">Pizza</button>
                            <button className="rounded-full text-gray-700 bg-white w-20 h-8">Pizza</button>
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-gray-100 flex flex-col md:flex-row mt-4 rounded-lg mb-4">
                    <div>
                        <img src={Img} alt=""/>
                    </div>
                    <div className="flex-col ml-3">
                        <div className="flex justify-between mb-2">
                            <h1 className="font-semibold">Original Wings & Rings - Dubai</h1>
                            <p className="text-red-700 font-semibold">(9.5km)</p>
                        </div>
                        <div className="flex mb-2">
                            <Rating  className = {classes.rating} size="small" max={4}/>
                            <p className="ml-2 text-gray-700">2.9 (195 Reviews)</p>
                        </div>
                        <p className="mb-4">Brazilian · Dubai Mall - Sheikh Mohammed bin Rashid Blvd Closed · Opens at 11:30 AM</p>
                        <div className="flex justify-evenly">
                            <button className="rounded-full text-gray-700 bg-white w-20 h-8">Foodie</button>
                            <button className="rounded-full text-gray-700 bg-white w-20 h-8">Pizza</button>
                            <button className="rounded-full text-gray-700 bg-white w-20 h-8">Pizza</button>
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-gray-100 flex flex-col md:flex-row mt-4 rounded-lg mb-4">
                    <div>
                        <img src={Img} alt=""/>
                    </div>
                    <div className="flex-col ml-3">
                        <div className="flex justify-between mb-2">
                            <h1 className="font-semibold">Original Wings & Rings - Dubai</h1>
                            <p className="text-red-700 font-semibold">(9.5km)</p>
                        </div>
                        <div className="flex mb-2">
                            <Rating  className = {classes.rating} size="small" max={4}/>
                            <p className="ml-2 text-gray-700">2.9 (195 Reviews)</p>
                        </div>
                        <p className="mb-4">Brazilian · Dubai Mall - Sheikh Mohammed bin Rashid Blvd Closed · Opens at 11:30 AM</p>
                        <div className="flex justify-evenly">
                            <button className="rounded-full text-gray-700 bg-white w-20 h-8">Foodie</button>
                            <button className="rounded-full text-gray-700 bg-white w-20 h-8">Pizza</button>
                            <button className="rounded-full text-gray-700 bg-white w-20 h-8">Pizza</button>
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-gray-100 flex flex-col md:flex-row mt-4 rounded-lg mb-4">
                    <div>
                        <img src={Img} alt=""/>
                    </div>
                    <div className="flex-col ml-3">
                        <div className="flex justify-between mb-2">
                            <h1 className="font-semibold">Original Wings & Rings - Dubai</h1>
                            <p className="text-red-700 font-semibold">(9.5km)</p>
                        </div>
                        <div className="flex mb-2">
                            <Rating className = {classes.rating} size="small" max={4}/>
                            <p className="ml-2 text-gray-700">2.9 (195 Reviews)</p>
                        </div>
                        <p className="mb-4">Brazilian · Dubai Mall - Sheikh Mohammed bin Rashid Blvd Closed · Opens at 11:30 AM</p>
                        <div className="flex justify-evenly">
                            <button className="rounded-full text-gray-700 bg-white w-20 h-8">Foodie</button>
                            <button className="rounded-full text-gray-700 bg-white w-20 h-8">Pizza</button>
                            <button className="rounded-full text-gray-700 bg-white w-20 h-8">Pizza</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default MediaMap;