import React from "react";

const AcceptTask = ({ data, updateTask }) => {
   return (
      <div className="flex-shrink-0 h-full w-[340px] shadow-lg card-flat rounded-xl p-5 border-l-4 border-l-amber-500">
         <div className="flex items-center justify-between mb-4">
            <span className="bg-amber-500 text-black text-[10px] px-2 py-0.5 font-black uppercase rounded">
               {data.category}
            </span>
            <span className="text-zinc-500 text-[10px] font-bold">{data.date}</span>
         </div>

         <div className="h-28 overflow-hidden">
            <h2 className="text-lg font-bold text-white mb-2">{data.title}</h2>
            <p className="text-zinc-400 text-xs leading-relaxed">
               {data.description || 'No description provided.'}
            </p>
         </div>

         <div className="flex gap-2 pt-4 mt-4 border-t border-zinc-800">
            <button
               onClick={() => updateTask(data._id, 'completed')}
               className="flex-1 bg-green-600 hover:bg-green-500 text-white text-[10px] font-bold uppercase py-2 rounded-lg"
            >
               Complete
            </button>
            <button
               onClick={() => updateTask(data._id, 'failed')}
               className="flex-1 bg-red-600 hover:bg-red-500 text-white text-[10px] font-bold uppercase py-2 rounded-lg"
            >
               Fail
            </button>
         </div>
      </div>
   )
}

export default AcceptTask;