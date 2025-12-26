import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";
const Admin = (props)=> {
    console.log
    return (
        <div className="h-screen w-full px-10 py-5">
            <Header changeUser={props.changeUser}/>
            <CreateTask/>
            <AllTask/>
        </div>
    )
}
export default Admin