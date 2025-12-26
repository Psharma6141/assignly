import React, { useState , useContext} from "react";
import { AuthContext } from "../../context/AuthProvider";

function CreateTask() {

    const [userData, setUserData]=useContext(AuthContext)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [category, setCategory] = useState('')
    const [AsignTo, setAsignTo] = useState('')
    const [newTask,setnewTask]= useState('')

//two way binding kiya hai re idhr (UI change data change , data change UI will also be change )

    const submitHandler = (e) => {
  e.preventDefault();

  const task = {
    title,
    description,
    date,
    category,
    active: false,
    newTask: true,
    failed: false,
    completed: false
  };

  const updatedData = userData.map((elem) => {
    if (elem.name === AsignTo) {
      return {
        ...elem,
        tasks: [...elem.tasks, task],
        taskNumbers: {
          ...elem.taskNumbers,
          newTask: elem.taskNumbers.newTask + 1
        }
        
    };
    console.log(elem.tasks)
    }
    return elem;
  });

  setUserData(updatedData);

  setAsignTo('');
  setTitle('');
  setDate('');
  setCategory('');
  setDescription('');
};




    return (
        <div className="p-5 bg-zinc-800 rounded-sm mt-4">
            <form onSubmit={(e) => {
                submitHandler(e)
            }} className="flex flex-wrap items-start mt- justify-between w-full">
                <div className="w-1/2">
                    <div>
                        <h1>Task Title</h1>
                        <input
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                            type="text" placeholder="your words" className="border-2 border-gray-600 rounded-sm w-full text-grey-50 px-2 py-1 bg-transparent text-sm" />
                    </div>
                    <div>
                        <h2 className="mt-2">Date</h2>
                        <input
                            value={date}
                            onChange={(e) => {
                                setDate(e.target.value)
                            }}
                            type="date" className="border-2 border-gray-600 rounded-sm w-full text-grey-50 px-2 py-1 bg-transparent text-sm"></input>
                    </div>
                    <div>
                        <h2 className="mt-2">Asign To</h2>
                        <input
                            value={AsignTo}
                            onChange={(e) => {
                                setAsignTo(e.target.value)
                            }}
                            type="text" placeholder="employee name" className="border-2 border-gray-600 rounded-sm w-full text-grey-50 px-2 py-1 bg-transparent text-sm" />
                    </div>
                    <div>
                        <h2 className="mt-2">Category</h2>
                        <input
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            type="text" placeholder="design, dev, etc" className="border-2 border-gray-600 rounded-sm w-full text-grey-50 px-2 py-1 bg-transparent text-sm" />
                    </div>
                </div>
                <div >
                    <div>
                        <h2>Descriptionription</h2>
                        <textarea
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }}
                            name="" id="" cols={47} rows={8} className="bg-transparent border-2 border-gray-600 rounded-sm text-sm px-2 py-1 text-grey-50"></textarea>
                    </div>
                    <button className="bg-slate-500 mt-2 py-1.5 rounded-sm w-full">Create Task</button>
                </div>
            </form>
        </div>
    )
}
export default CreateTask