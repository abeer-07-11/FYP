import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import  { v4 as uuidv4}from "uuid";
import { config } from "react-spring";
import Div1Back from "../../Images/GCUMain01.jpg"
import Div2Back from "../../Images/ucp.jfif"
import Div3Back from "../../Images/fccu.jfif"
import Cook from "../../Images/gculogo.jfif"
import Ucp from "../../Images/ucplog.jfif"
import Inner from "../../Images/fcculogo.png"
import styled from "styled-components"

export default class UpperSlider extends Component {
  state = {
    goToSlide: 0,
    config: config.gentle,
    i:0,
    slides:[
      {
        key: uuidv4(),
        content: 
        <div className="bg-opacity-25" style={{backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${Div1Back})`, width:"780px", backgroundSize:"100% 100%", borderRadius: "30px"}}>
        <div className="flex justify-end h-16 pr-5 pt-5">
            {/* <img src={No} alt="" className="w-16 h-10"/> */}
        </div>
        <div className="flex justify-center items-center mb-8">
            <div className="flex justify-center items-center rounded-full bg-white w-56 h-56">
                <img src={Cook} alt="" className="w-40 h-40 "/>
            </div>
            <h1 className="text-white font-bold text-4xl ml-2">Government<br/>College University</h1>
        </div>
    </div>
      },
      {
        key: uuidv4(),
        content: 
        <div style={{backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${Div2Back})`, width:"780px", backgroundSize:"100% 100%", borderRadius:"30px"}}>
        <div className="flex justify-end h-16 pr-5 pt-5">
            {/* <img src={No} alt="" className="w-16 h-10"/> */}
        </div>
        <div className="flex justify-center items-center mb-8">
            <div className="flex justify-center items-center rounded-full bg-white w-56 h-56">
                <img src={Ucp} alt="" className="rounded-full"/>
            </div>
            <h1 className="text-white font-bold text-4xl ml-2">University of<br/>Central Punjab</h1>
        </div>
    </div>
      },
      {
        key: uuidv4(),
        content: 
        <div style={{backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${Div3Back})`, width:"780px", backgroundSize:"100% 100%", borderRadius:"30px"}}>
        <div className="flex justify-end h-16 pr-5 pt-5">
            {/* <img src={No} alt="" className="w-16 h-10"/> */}
        </div>
        <div className="flex justify-center items-center mb-8">
            <div className="flex justify-center items-center rounded-full bg-white w-56 h-56">
                <img src={Inner} alt="" className="w-40 h-40"/>
            </div>
            <h1 className="text-white font-bold text-4xl ml-2">Forman<br/>Christan College</h1>
        </div>
    </div>
      },
    ].map((slide, index) => {
      return { ...slide, onClick: () => {
        this.setState({ goToSlide: index})
        clearInterval(this.interval);
        }};
    }),
  };

  Myfunction() {
    let Length = this.state.slides.length;
    this.setState({ goToSlide: this.state.i + 1});
      if(this.state.i == Length-1){
        this.setState({ goToSlide: 0});
        this.setState({i : -1});
      }
      this.setState({i : this.state.i + 1});
  }

  interval = setInterval(() => {
    this.Myfunction();
  }, 4000);


  render() {
    return (
        <div className="bg-white px-40 hidden md:block pb-10 z-0" style={{width:"100%", height:"530px"}}>
            <Carousel
                slides={this.state.slides}
                goToSlide={this.state.goToSlide}
                animationConfig={this.state.config}
            />
            <Slash>
            {
                this.state.slides.map((slide,index) => <BottomDot key={index} isActive={index === this.state.goToSlide} 
                onClick={() => {
                this.setState({goToSlide:index});
                clearInterval(this.interval);
            }}
            />)
          }
            </Slash>
        </div>
    );
  }
}

const Slash = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const BottomDot = styled.hr`
  width: ${props => props.isActive ? 30 : 15}px;
  border-top:${props => props.isActive ? "6px solid #c1272d" : "6px solid #3a3a3a" };
  border-radius: 10px;
  margin-right:2px;
  margin-left:2px;
`;

const Buttons = styled.div`
    background-color: rgba(0,0,0,0.7);
    :hover{
        background-color: gray;
    }
`;