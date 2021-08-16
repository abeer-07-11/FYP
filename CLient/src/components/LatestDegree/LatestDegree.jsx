import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styled from "styled-components"

const Looking = () => {
       
    return ( 
        <div className="bg-gray-200 p-5">
            <h2 className="text-center text-3xl font-bold mb-2">Your Latest Degree</h2>
            <div className="flex justify-center mb-4"><hr className ="border-t-4 border-solid border-red-700 rounded-full w-32"/></div>
            <div className="flex flex-col items-center md:flex-row md:justify-center md:flex-wrap">
                <button className="bg-white text-black text-left md:rounded-l-lg w-64 h-16 m-1 font-bold rounded-lg px-2 md:rounded-none">
                    <UnorderList1 flex={2}>
                        <li> Matric <i className="fas fa-caret-down"></i>
                            <ul className="pb-10 p-2">
                                <li> Science
                                    <ul className="pb-10 ml-12">
                                        <Link to={'/CompCollege'}><li> Computer </li></Link>
                                        <Link to={'/BioCollege'}><li> Biology </li></Link>
                                    </ul>
                                </li>
                                <Link to={'/arts'}><li> Arts </li></Link>
                            </ul>
                        </li>
                    </UnorderList1>
                </button>
                <button className="bg-white text-black text-left md:w-56 h-16 m-1 px-2 font-bold rounded-lg w-64 md:rounded-none">
                    <UnorderList1 flex={2}>
                        <li> Intremediate
                            <ul className="pb-10 p-2">
                                <Link to ={'/medical'}><li> Pre-Medical </li></Link>
                                <Link to ={'/engineering'}><li> Pre-Engineering </li></Link>
                                <Link to ={'/compUni'}><li> I.C.S </li></Link>
                                <Link to ={'/icom'}><li> I.Com </li></Link>
                                <Link to ={'/fa'}><li> F.A </li></Link>
                            </ul>
                        </li>
                    </UnorderList1>
                </button>
                <button className="bg-white text-black text-left md:w-48 h-16 m-1 px-2 font-bold rounded-lg w-64 md:rounded-none">
                    <UnorderList1>
                        <li> Bachelor
                        <ul className="pb-10 p-2">
                                <Link to = {'/csuni'}><li> CS & IT </li></Link>
                                <Link to = {'/MedicalUni'}><li> Medical </li></Link>
                                <Link to = {'/EngUni'}><li> Engineering </li></Link>
                                <Link to= {'/managUni'}><li> Management Sciences </li></Link>
                                <Link to = {'/socialUni'}><li> Social Sciences </li></Link>
                                <Link to = {'/lawUni'}><li> Law </li></Link>
                                <Link to = {'/ReligiousUni'}><li> Religious Studies </li></Link>
                                <Link to = {'/LanguageUni'}><li> Languages </li></Link>
                                <Link to = {'/MediaUni'}><li> Media Studies </li></Link>
                                <Link to = {'/ArtsUni'}><li> Arts & Design </li></Link>
                                <Link to = {'/CommerceUni'}><li> Commerce / Finance & Acounting </li></Link>
                            </ul>
                        </li>
                    </UnorderList1>
                </button>
                <button className="bg-white text-black text-left md:w-48 h-16 m-1 px-2 font-bold rounded-lg w-64 md:rounded-none">
                <UnorderList1>
                        <li> Master
                        <ul className="pb-10 p-2">
                        <Link to = {'/csuni'}><li> CS & IT </li></Link>
                                <Link to = {'/MedicalUni'}><li> Medical </li></Link>
                                <Link to = {'/EngUni'}><li> Engineering </li></Link>
                                <Link to= {'/managUni'}><li> Management Sciences </li></Link>
                                <Link to = {'/socialUni'}><li> Social Sciences </li></Link>
                                <Link to = {'/lawUni'}><li> Law </li></Link>
                                <Link to = {'/ReligiousUni'}><li> Religious Studies </li></Link>
                                <Link to = {'/LanguageUni'}><li> Languages </li></Link>
                                <Link to = {'/MediaUni'}><li> Media Studies </li></Link>
                                <Link to = {'/ArtsUni'}><li> Arts & Design </li></Link>
                                <Link to = {'/CommerceUni'}><li> Commerce / Finance & Acounting </li></Link>
                            </ul>
                        </li>
                    </UnorderList1>
                </button>
                <button className="bg-white text-black text-left md:w-48 h-16 m-1 px-2 font-bold rounded-lg w-64 md:rounded-none">
                <UnorderList1>
                        <li> M.Phil
                        <ul className="pb-10 p-2">
                                <Link to = {'/CsMaster'}><li> CS & IT </li></Link>
                                <Link to = {'/MedicalMaster'}><li> Medical </li></Link>
                                <Link to = {'/EngMaster'}><li> Engineering </li></Link>
                                <Link to = {'/ManagMaster'}><li> Management Sciences </li></Link>
                                <Link to = {'SocialMaster'}><li> Social Sciences </li></Link>
                                <Link to = {'/LawMaster'}><li> Law </li></Link>
                                <Link to = {'/religiousMaster'}><li> Religious Studies </li></Link>
                                <Link to = {'/LanguageMaster'}><li> Languages </li></Link>
                                <Link to = {'/MediaMaster'}><li> Media Studies </li></Link>
                                <Link to = {'/ArtsMaster'}><li> Arts & Design </li></Link>
                                <Link to = {'/CommerceMaster'}><li> Commerce / Finance & Acounting </li></Link>
                            </ul>
                        </li>
                    </UnorderList1>
                </button>
            </div>
        </div>
     );
}
 
export default Looking;

const UnorderList1 = styled.ul`
    flex: ${ props => props.flex};
    color: #000000;
    padding-left: 20px;

    
    & li{
        display: block;
        font-size: 15px;
        font-family: Montserrat;

        & ul{
            display: none;
        }
        :hover{
            color: black;
        }
        :hover > ul{
            display:flex;
            flex-flow: column;
            z-index: 1;
            position: absolute;
            background-color: white;
        }
        & li:hover{
            color: red;
        }
    }
`