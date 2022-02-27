import React from "react";
import "./App.css";
import Farmer from "./Age/Farmer.png";
import Programmer from "./Age/Programmer.png";
import Police2 from "./Age/Police2.png";
import Nurse from "./Age/Nurse.png";
import Police from "./Age/Police.png";
import Metallugical from "./App/Metallugical.png";
import Teacher from "./Age/Teacher.png";
import millitary from "./Age/millitary.png";
import SafetyEngineer from "./Age/SafetyEngineer.png";

function App (){

  const Schema = [
    {
      image: <img className="Details" src={Farmer}/>,
      name: "John",      
      age: 20,
      sex: "Male",
      class: "Farmer"
    },
    {
      image: <img className="Details" src={Programmer}/>,
      name: "charles",      
      age: 27,
      sex: "Male",
      class: "Programmer"
    },
    {
      image: <img className="Detials" src={Police2}/>,
      name: "Chuks",      
      age: 30,
      sex: "Male",
      class: "Police2"
    },
    {
      image: <img className="Detials" src={Nurse}/>,
      name: "Binta",      
      age: 23,
      sex: "Female",
      class: "Nurse"
    },
    {
      image: <img className="Detials" src={Police}/>,
      name: "Doris",      
      age: 19,
      sex: "Female",
      class: "Police"
    },
    {
      image: <img className="Details" src={Metallugical}/>,
      name: "Deji",      
      age: 42,
      sex: "Male",
      class: "Metallugical"
    },
    {
      image: <img className="Details" src={Teacher}/>,
      name: "Yemi",      
      age: 35,
      sex: "Female",
      class: "Teacher"
    },
    {
      image: <img className="Details" src={millitary}/>,
      name: "Chinedu",      
      age: 68,
      sex: "Male",
      class: "millitary"
    },
    {
      image: <img className="Details" src={SafetyEngineer}/>,
      name: "Neyo",      
      age: 60,
      sex: "Male",
      class: "Safety Engineering"
    },
  ]


  return(
    <div className="CardHolder">
      {Schema.map((props)=>(
        <div className="Card">
          <div>{props.image}</div>
          <div className="div">Name: {props.name}</div>
          <div className="div">Age: {props.age}</div>
          <div className="div">Sex: {props.sex}</div>
          <div className="div">Class: {props.class}</div>
        </div>
      ))}
    </div>
  )
}

export default App

