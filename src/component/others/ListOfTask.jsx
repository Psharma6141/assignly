import React from "react";
const ListOfTask = ({data}) =>{
    return(
        <div className="flex mt-10 gap-3 justify-between screen">
          <div className="h-30 w-[45%] px-5 py-4 rounded-xl bg-red-400">
            <h1 className="bg-transparent font-semibold">{data.taskNumbers.newTask}</h1>
            <h1 className="bg-transparent font-semibold"> New Task</h1>
          </div>
          <div className="h-30 w-[45%] px-5 py-4 rounded-xl bg-green-400">
            <h1 className="bg-transparent font-semibold">{data.taskNumbers.completed}</h1>
            <h1 className="bg-transparent font-semibold"> Completed</h1>
          </div>
          <div className="h-30 w-[45%] px-5 py-4 rounded-xl bg-red-300">
            <h1 className="bg-transparent font-semibold">{data.taskNumbers.active}</h1>
            <h1 className="bg-transparent font-semibold"> Accepted</h1>
          </div>
          <div className="h-30 w-[45%] px-5 py-4 rounded-xl bg-blue-400">
            <h1 className="bg-transparent font-semibold">{data.taskNumbers.failed}</h1>
            <h1 className="bg-transparent font-semibold">Failed</h1>
          </div>
        </div>
    )
}
export default ListOfTask