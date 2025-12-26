import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompletedTask from "./Completetask";
import FailedTask from "./FailedTask";
const TaskList = ({data}) => {
   // console.log(data.email)
    return (
        <div id="tasklist" className="h-60 mt-10 overflow-x-auto items-center flex justify-start gap-5 ">
            {data.tasks.map((elem, idx)=>{

                if(elem.active){
                    return <AcceptTask key={idx} data={elem}/> 
                }
                if(elem.newTask){
                    return <NewTask key={idx} data={elem}/>
                }
                if(elem.completed){
                    return <CompletedTask key={idx} data={elem}/>
                }
                if(elem.failed){
                    return <FailedTask key={idx} data={elem}/>
                }
            })}
      
           
           
        </div>
    )
}
export default TaskList