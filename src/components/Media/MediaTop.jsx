import React from 'react';
import Img from "../../Images/Rectangle131.png";
import Calender from "../../Images/asset6.png";
import Location from "../../Images/Vector.png";
import Dollar from "../../Images/Dollar.png";
import Img2 from "../../Images/Rectangle179.png"
import styled from 'styled-components';
import Content from '../Reuseable Components/Content/Content';

const MediaTop = () => {

    const Times = [
        {
            name: "DAYS",
            time: "15",
        },
        {
            name: "HOURS",
            time: "17",
        },
        {
            name: "MINUTES",
            time: "43",
        },
        {
            name: "SECONDS",
            time: "15",
        },
    ]

    return ( 
        <div className="flex flex-col">
            <img src={Img} alt="" className="rounded-lg"/>
            <div className="flex justify-between mt-5 mb-4">
                <h1 className="text-3xl font-bold">Music Night Event</h1>
                <div className="flex justify-between">
                    <img src={Calender} alt="Calender" className="w-6 h-6"/>
                    <time className="text-red-700 font-bold mb-5 ml-2">02-02-2021</time>
                    <img src={Location} alt="" className="w-6 h-6 ml-6"/>
                    <p className="inline-block text-red-700 font-bold mb-5 ml-2">Melbourne, AU</p>
                </div>
            </div>
            <Content/>
            <DIV className="border p-5 my-6 rounded-lg flex flex-col">
                <div className="flex m-2">
                    <img src={Calender} alt="" className="w-6 h-6"/>
                    <p className="ml-3 text-gray-600 font-bold">Event Schedule: Feb 11,2021 08:00 AM to Jul 28, 2021 2:00 PM</p>
                </div>
                <div className="flex m-2">
                    <img src={Location} alt="" className="w-5 h-6"/>
                    <p className="ml-3 text-gray-600  font-bold">Location: South Africa</p>
                </div>
                <div className="flex m-2">
                    <div className="flex justify-center items-center border-red-700 border-2 rounded-full h-6 w-6">
                        <img src={Dollar} alt="" className="w-2 h-3"/>
                    </div>
                    <p className="ml-3 text-gray-600  font-bold">Price: $ 80</p>
                </div>
            </DIV>
            <div className="mt-2">
                <p className="text-gray-600"> 
                Laculis eu non diam phasellus vestibulum. Felis donec et odio pellentesque diam volutpat commodo sed. Nullam vehicula ipsum a arcu cursus vitae congue mauris. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Justo nec ultrices dui sapien. Feugiat in fermentum posuere urna nec tincidunt. Bibendum at varius vel pharetra vel turpis. Posuere morbi leo urna molestie at elementum. Mauris cursus mattis molestie a iaculis at erat. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Sit amet porttitor eget dolor morbi non arcu risus. Vel risus commodo viverra maecenas accumsan lacus vel.
                <br/> Posuere morbi leo urna molestie at elementum. Mauris cursus mattis molestie a iaculis at erat. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Sit amet porttitor eget dolor morbi non arcu risus. Vel risus commodo viverra maecenas accumsan lacus vel.
                Posuere morbi leo urna molestie at elementum. Mauris cursus mattis molestie a iaculis at erat. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Sit amet porttitor eget dolor morbi non arcu risus. Vel risus commodo viverra maecenas accumsan lacus vel.
                </p>
            </div>
            <div className="px-8 py-16 rounded-xl mt-5" style={{backgroundImage: `url(${Img2})`, backgroundSize:"100% 100%"}}>
                <div className="flex justify-evenly flex-wrap items-center">
                    {
                        Times.map(({name, time}) => {
                            return(
                                <div key={name} className="flex flex-col text-white font-bold text-3xl">
                                    <p className="text-center">{time}</p>
                                    <p>{name}</p>
                                </div>
                            )
                        })
                    }
                    <Button className="font-bold p-3 rounded-full w-40">
                        Book Now
                    </Button>
                </div>
            </div>
            <div className="mt-6 mb-5">
                <p className="text-gray-600">
                    Laculis eu non diam phasellus vestibulum. Felis donec et odio pellentesque diam volutpat commodo sed. Nullam vehicula ipsum a arcu cursus vitae congue mauris. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Justo nec ultrices dui sapien. Feugiat in fermentum posuere urna nec tincidunt. Bibendum at varius vel pharetra vel turpis. Posuere morbi leo urna molestie at elementum. Mauris cursus mattis molestie a iaculis at erat. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Sit amet porttitor eget dolor morbi non arcu risus. Vel risus commodo viverra maecenas accumsan lacus vel.
                </p>
            </div>
        </div>
    );
}
 
export default MediaTop;

const DIV = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
`;

const Button = styled.button`
    background-color: #FADE09;
`;