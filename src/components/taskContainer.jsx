import { useEffect, useState } from "react"
import { Footer } from "./footer/footer"
import { Header } from "./header/header"
import { TaskInput } from "./taskInput/taskInput"
import { TaskList } from "./taskList/taskList"


export const TaskContainer = () => {



  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("taskList")
    console.log("storedTasks :>> ", storedTasks)
    if (storedTasks) {
      setTaskList(JSON.parse(storedTasks))
    }
  }, []);

  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem("taskList", JSON.stringify(tasks));
  }

  const addTask = (title) => {
    const newTask = {
      id: taskList.length ? taskList[taskList.length - 1].id + 1 : 1,
      title: title,
      completed: false
    };

    const updatedTasks = [...taskList, newTask];
    setTaskList(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const editTask = (id, completedValue) => {
    const updatedTasks = taskList.map((task) => 
      task.id === id ? {...task, completed: completedValue} : task
    )
    setTaskList(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  }

  const getTaskCounts = () => {
    const completedTasks = taskList.filter((task) => task.completed).length;
    const incompletedTasks = taskList.length - completedTasks;
    return {
      completedTasks,
      incompletedTasks
    }
  };

  const { completedTasks, incompletedTasks } = getTaskCounts(); 

  return (
    <main>
      <Header />
      <TaskInput addTask={addTask} />
      <TaskList 
        taskList={taskList} 
        editTask={editTask} 
        deleteTask={deleteTask}
        incompletedTasks={incompletedTasks} 
      />
      <Footer completedTasks={completedTasks} />
    </main>
  )
}