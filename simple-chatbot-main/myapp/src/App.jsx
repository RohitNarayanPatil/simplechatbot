import React from "react";
import ChatBot from "react-simple-chatbot";
import "./App.css";
import {useState} from 'react';

function App() {
  const[show,setShow]=useState(false)
  return (  
    
    <div className="my">{
      show?<ChatBot
      headerTitle ="ChatBot"
   steps ={ [
    {
      id: "Greet",
      message: "Hello, Welcome to our Website",
      trigger: "Done",
    },
    {
      id: "Done",
      message: "Please enter your city!",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Please enter your Name!",
      trigger: "waiting2",
    },
    {
      id: "waiting2",
      user: true,
      trigger: "Nam",
    },
    {
      id: "Nam",
      message: "Hi {previousValue}, Please select your issue",
      trigger: "issues",
    },
    {
      id: "issues",
      options: [
        {value: "React",label: "React",trigger: "React",},
        { value: "Angular", label: "Angular", trigger: "Angular" },
        { value: "TypeScript", label: "TypeScript", trigger: "TypeScript" },
      ],
    },
    {
      id: "React",
      message:
        "Thanks for letting your React issue, Our team will resolve your issue ASAP",
      end: true,
    },
    {
      id: "Angular",
      message:
        "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",
        end: true,
    },
    {
      id: "TypeScript",
      message:
        "Thanks for letting your TypeScript issue, Our team will resolve your issue ASAP",
        end: true,
    },
  ]}
  
  />:null
  
  
    }
    {/* <button className="apk"onClick={()=>setShow(true)}>R </button>
    <button className="apk"onClick={()=>setShow(false)}>c </button> */}
    
    
    <button className="apk"onClick={()=>setShow(!show)}> </button>

  </div>

  );
}

export default App;
