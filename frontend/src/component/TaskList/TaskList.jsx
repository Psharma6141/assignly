import React, { useContext } from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";
import { AuthContext } from "../../context/AuthProvider";
import api from "../../utils/api";

const TaskList = ({ data }) => {
    const [userData, setUserData] = useContext(AuthContext)

    const updateTask = async (taskId, status) => {
        try {
            await api.patch(`/tasks/${taskId}`, { status });
            const response = await api.get('/users');
            setUserData(response.data);
            alert(`Task marked as ${status}`);
        } catch (error) {
            console.error("Error updating task:", error);
            alert("Failed to update task");
        }
    }

    const deleteTask = async (taskId) => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            try {
                await api.delete(`/tasks/${taskId}`);
                const response = await api.get('/users');
                setUserData(response.data);
                alert("Task deleted");
            } catch (error) {
                console.error("Error deleting task:", error);
                alert("Failed to delete task");
            }
        }
    }

    return (
        <div id="tasklist" className="h-60 mt-10 overflow-x-auto items-center flex justify-start gap-5 ">
            {data && data.tasks && data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} updateTask={updateTask} />
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} updateTask={updateTask} />
                }
                if (elem.completed) {
                    return <CompletedTask key={idx} data={elem} deleteTask={deleteTask} />
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} deleteTask={deleteTask} />
                }
                return null
            })}
        </div>
    )
}
export default TaskList