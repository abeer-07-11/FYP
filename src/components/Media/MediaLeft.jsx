import React,{useContext} from 'react';
import styled from 'styled-components';
import LeftImg from "../../Images/asset39.png"
import Calender from "../../Images/asset6.png"
import Foodicted from "../../Images/asset8.png"

const MediaLeft = () => { 
    return ( 
        <div className="mb-2">
            <div className="flex flex-col md:flex-row bg-yellow-100">
                <Image className="flex md:w-4/5">
                    <img src={LeftImg} alt="" className="object-contain h-64 w-full md:object-fill md:h-full"/>
                </Image>
                <div className="flex flex-col p-10 order-2 md:order-1">
                    <div className="bg-white rounded-lg w-48 h-20 mb-5 border-yellow-500 border-2">
                        <img src={Foodicted} alt="" className="w-48 h-20"/>
                    </div>
                    <div className="flex">
                        <img src={Calender} alt="Calender" className="w-6 h-6"/>
                        <time className="text-red-700 ml-4 font-bold mb-5">02-02-2021</time>
                    </div>
                    <h1 className="font-bold text-2xl mb-10">Food & Beverage Magazine Has Remained</h1>
                    <p className="text-gray-600 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores distinctio, quas magni earum assumenda ratione numquam quos quia ex ipsum commodi maxime, voluptatibus eum temporibus nulla quasi vitae obcaecati et...</p>
                    <button className="bg-red-700 text-white rounded-full h-12 w-40 font-bold">Read More</button>
                    <div className="flex mt-4">
                        <hr className="border-b-4 border-t-2 border-solid border-gray-700 rounded-full w-4"/>
                        <hr className="border-b-4 border-t-2 border-solid border-red-700 rounded-full w-8 mx-1"/>
                        <hr className="border-b-4 border-t-2 border-solid border-gray-700 rounded-full w-4"/>
                    </div>
                </div>
                <Rotate flex={1} className="md:order-3 order-1"><h1>BE UPDATED</h1></Rotate>
            </div>
        </div>
     );
}
export default MediaLeft;

const Image = styled.div`
    height: 660px;

    @media (max-width: 768px){
        height: 16rem;
    }
`;
const Rotate  = styled.section`
    flex: ${props => props.flex};
    display: flex;
    justify-content: center;
    align-items: center;  
    width: 20%;

    & h1{
        font-family: Montserrat;
        font-size: 52px; 
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke: 1px lightgray;
        transform: rotate(90deg);

        @media (max-width:768px){
            font-size: 40px;
            order: 2;
            transform: rotate(0deg);
            margin-left: 140px;
            margin-top: 20px;
        }
    }
`;