import React from "react";

const CompletedTask = ({ data, deleteTask }) => {
    return (
        <div className="flex-shrink-0 h-full w-[340px] shadow-lg card-flat rounded-xl p-5 border-l-4 border-l-green-500">
            <div className="flex items-center justify-between mb-4">
                <span className="bg-green-500 text-black text-[10px] px-2 py-0.5 font-black uppercase rounded">
                    {data.category}
                </span>
                <span className="text-zinc-500 text-[10px] font-bold">{data.date}</span>
            </div>

            <div className="h-28 overflow-hidden">
                <h2 className="text-lg font-bold text-white mb-2">{data.title}</h2>
                <p className="text-zinc-400 text-xs leading-relaxed">
                    {data.description || 'Goal successfully achieved.'}
                </p>
            </div>

            <div className="pt-4 mt-4 border-t border-zinc-800">
                <button
                    onClick={() => deleteTask(data._id)}
                    className="w-full bg-zinc-800 hover:bg-red-600 text-zinc-400 hover:text-white text-[10px] font-bold uppercase py-2 rounded-lg border border-zinc-700 transition-all"
                >
                    Archive
                </button>
            </div>
        </div>
    )
}

export default CompletedTask;
