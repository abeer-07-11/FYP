import React from 'react';
import ParticlesBg from "particles-bg";
import styled from "styled-components"

const Title = (props) => {
    return ( 
        <div className="mb-8" style={{backgroundImage: `url(${props.bg})`,  backgroundSize:"100% 100%", filter: "drop-shadow(8px 8px 10px gray)", zIndex:"0"}}>
            <div className="flex items-center justify-center p-20">
                <div className="ml-2 text-white">
                    <ParticlesBg color="#d8d8d8" num={70} type="cobweb" bg={true} />
                    <h1 className="flex center text-6xl">{props.title}</h1>
                    <h3 className="flex justify-center text-4xl">{props.sub}</h3>
                </div>
            </div>
        </div>
    );
}
 
export default Title;

const Buttons = styled.div`
    background-color: rgba(0,0,0,0.7);
    :hover{
        background-color: gray;
    }
`;