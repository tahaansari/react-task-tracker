import {useState} from 'react' 
import './index.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([])

const [show, setShow] = useState(false)

const toggleShow = () => {
  setShow(!show)
}

const addTask = (task) => {
  const id = Math.floor(Math.random()*10000)+1;
  const newTask = {...task,id}
  setTasks([...tasks,newTask])
}

const deleteTask = (id) => {
  setTasks(tasks.filter((task)=>task.id!==id))
}

const toggleReminder = (id) => {
  console.log(id)
  setTasks(tasks.map((task)=>{ return task.id===id ? {...task, reminder : !task.reminder} : task }))
}

  return (
    <div className="container">
      <Header title="Task Tracker" onToggleShow={toggleShow} showForm={show}/>
      {show ? <AddTask onAdd={addTask}/> : ""}
      {
        tasks.length > 0 ? 
        <Tasks tasks={tasks} onDelete={deleteTask} onToggleReminder={toggleReminder}/>
        : "No Tasks To Show" 
      }
    </div>
  );

}

export default App;