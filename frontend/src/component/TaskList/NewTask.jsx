import React from "react";

const NewTask = ({ data, updateTask }) => {
   return (
      <div className="flex-shrink-0 h-full w-[340px] shadow-lg card-flat rounded-xl p-5 border-l-4 border-l-blue-500">
         <div className="flex items-center justify-between mb-4">
            <span className="bg-blue-500 text-white text-[10px] px-2 py-0.5 font-black uppercase rounded">
               {data.category}
            </span>
            <span className="text-zinc-500 text-[10px] font-bold">{data.date}</span>
         </div>

         <div className="h-28 overflow-hidden">
            <h2 className="text-lg font-bold text-white mb-2">{data.title}</h2>
            <p className="text-zinc-400 text-xs leading-relaxed">
               {data.description || 'Action required for this new task.'}
            </p>
         </div>

         <div className="pt-4 mt-4 border-t border-zinc-800">
            <button
               onClick={() => updateTask(data._id, 'active')}
               className="w-full bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold uppercase py-2 rounded-lg"
            >
               Accept Task
            </button>
         </div>
      </div>
   )
}

export default NewTask;