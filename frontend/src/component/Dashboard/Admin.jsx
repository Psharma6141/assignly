import React, { useState } from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";
import CreateUser from "../others/CreateUser";

const Admin = (props) => {
    const [view, setView] = useState('createTask') // can be 'createTask' or 'createUser'

    const toggleView = () => {
        setView(prev => prev === 'createTask' ? 'createUser' : 'createTask')
    }

    return (
        <div className="h-screen w-full px-10 py-5">
            <Header
                changeUser={props.changeUser}
                isAdmin={true}
                showCreateUser={toggleView}
            />
            {view === 'createTask' ? (
                <CreateTask />
            ) : (
                <div className="mt-4">
                    <button
                        onClick={() => setView('createTask')}
                        className="bg-zinc-700 text-white px-4 py-1 rounded-sm text-sm hover:bg-zinc-600 mb-2"
                    >
                        ← Back to Create Task
                    </button>
                    <CreateUser />
                </div>
            )}
            <AllTask />
        </div>
    )
}

export default Admin;