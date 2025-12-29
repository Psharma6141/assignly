import React from "react";
import Header from "../others/Header";
import { useState } from "react";
import ListOfTask from "../others/ListOfTask";
import TaskList from "../TaskList/TaskList";
const  Employee = (props) =>{
   //console.log(props.data)
    return(
        <>
      <div className="px-6 py-12">
       
        <Header changeUser={props.changeUser} data={props.data}/>
        <ListOfTask data={props.data}/>
        <TaskList data={props.data}/>
      </div>
        </>
    )
}
export default Employee 