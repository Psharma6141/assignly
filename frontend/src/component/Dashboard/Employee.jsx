import React from "react";
import Header from "../others/Header";
import { useState } from "react";
import ListOfTask from "../others/ListOfTask";
import TaskList from "../TaskList/TaskList";
const Employee = (props) => {
  //console.log(props.data)
  return (
    <>
      <div className="px-6 py-12">
        <Header changeUser={props.changeUser} data={props.data} />
        {props.data ? (
          <>
            <ListOfTask data={props.data} />
            <TaskList data={props.data} />
          </>
        ) : (
          <div className="flex items-center justify-center mt-20">
            <h1 className="text-2xl text-white">Loading your tasks...</h1>
          </div>
        )}
      </div>
    </>
  )
}
export default Employee 