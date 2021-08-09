import React,{useState} from 'react';
import Logo from "../../Images/Logo.jpeg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import admin from '../../Images/user.png';

const Header = () => {
    const [click , setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    return ( 
        <Outer className="white xl:bg-black text-white mb-2 relative">
            <Wrapper className="flex xl:flex-row xl:items-center" click={click}>
            <ul className="text-center ml-4 block xl:inline-block flex-1 font-semibold text-base hover:text-gray-700 transition duration-500 ease-in-out">
                <li className="mr-2 ">Academic Program Finder</li>
                <li className="mr-2 ">& Recommender</li>
            </ul>
            <ul className="flex-1 flex items-center justify-center order-first xl:order-none">
                <li className="cursor-pointer">
                <Link to="/"><img src={Logo} alt="Amaken" className="w-40 my-2"/></Link>
                </li>
            </ul> 
            <First className="flex flex-col items-center justify-evenly xl:flex-row  flex-1 xl:justify-around relative xl:flex-wrap">
                <li className="block xl:inline-block mr-2 font-semibold text-base hover:text-gray-700 transition duration-500 ease-in-out">
                    <Link to="/">Home</Link></li>
                <li className="inline-block mr-2 font-semibold text-base hover:text-gray-700 transition duration-500 ease-in-out">
                    <Link to="/about">About Us</Link></li>
                <li className="inline-block mr-2 font-semibold text-base hover:text-gray-700 transition duration-500 ease-in-out">
                    <Link to="/contact">Contact Us</Link></li>
                <li className="inline-block mr-2 font-semibold text-base hover:text-gray-700 transition duration-500 ease-in-out">
                    <Link to="/signin"><img className="rounded-full" src={admin} /></Link></li>
            </First>
                
            </Wrapper>
            <svg className="bg-white text-black block xl:hidden w-10 h-10 absolute z-10 left-0" onClick={handleClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </Outer>
     );
}
export default Header;

const Outer = styled.div`

    @media (max-width: 1279px){
        height: 10px;
    }
`;

const Wrapper = styled.div`
 
    @media (max-width: 1279px){   
        top:40px;
        position: fixed;
        flex-flow: column;
        align-items: center;
        height: 100vh;
        padding: 20px;
        transform: ${props => {
            if(props.click) {
                return "translateX(0%)"
            };
            return "translateX(-125%)"
        }};
        transition: transform .5s;
        z-index: 100;
        background-color: black;
    }
`;

const First = styled.ul`
    & > li{
        font-family:Montserrat;
        & > ul {
            display:none;
        }

        :hover{
            & > ul {
                display: block;
            }
        }
    }
`;