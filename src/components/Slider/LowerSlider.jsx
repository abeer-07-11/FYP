import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import  { v4 as uuidv4}from "uuid";
import { config } from "react-spring";
import Div1 from "../../Images/sir.jfif"
import Div2 from "../../Images/abeer.jpeg"
import Div3 from "../../Images/muzamal.jpg"
import styled from "styled-components"

export default class LowerSlider extends Component {
  state = {
    goToSlide: 0,
    config: config.gentle,
    i: 0,
    slides:[
      {
        key: uuidv4(),
        content: <div style={{width:"760px", height:"300px"}}>
            <div className="flex justify-center items-center mb-8">
            <div className="flex justify-center items-center rounded-full bg-white w-56 h-56">
                <img src={Div1} alt="" className="rounded-full"/>
            </div>
            <h1 className="text-black font-bold text-4xl ml-2">Muhammad<br/>Arsalan Raza</h1>
        </div>
        </div>
      },
      {
        key: uuidv4(),
        content: <div className="flex justify-center items-center mb-8">
            <div className="flex justify-center items-center rounded-full bg-white w-48 h-48">
                <img src={Div2} alt="" className="rounded-full"/>
            </div>
            <h1 className="text-black font-bold text-4xl ml-2">Abeer<br/>Tajamal</h1>
        </div>
      },
      {
        key: uuidv4(),
        content: <div className="flex justify-center items-center mb-8">
            <div className="flex justify-center items-center rounded-full bg-white w-48 h-48">
                <img src={Div3} alt="" className="rounded-full"/>
            </div>
            <h1 className="text-black font-bold text-4xl ml-2">Muzamal<br/>Khan</h1>
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
      <div className=" bg-blue-100 px-40 hidden md:block pb-32" style={{width:"100%", height:"500px"}}>
        <h1 className="font-bold text-3xl text-center pt-10">Our Team</h1>
        <div className="flex justify-center mb-4"><hr className ="border-t-4 border-solid border-red-700 rounded-full w-16"/></div>
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
`;

const BottomDot = styled.hr`
  width: ${props => props.isActive ? 30 : 15}px;
  border-top:${props => props.isActive ? "6px solid #c1272d" : "6px solid #3a3a3a" };
  border-radius: 10px;
  margin-right:2px;
  margin-left:2px;
`;