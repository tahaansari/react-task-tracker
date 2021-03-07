import {useState} from 'react' 
import './index.css'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

  const [tasks, setTasks] = useState([
    {
        id:1,
        text: "Doctors Appointment",
        day:"Feb 5th at 2:30pm",
        reminder:true
    },
    {
        id:2,
        text: "Home Work",
        day:"Feb 8th at 5:00pm",
        reminder:true
    },
    {
        id:3,
        text: "Bill Payment",
        day:"Feb 9th at 1:00pm",
        reminder:true
    },
    {
        id:4,
        text: "Watch movie",
        day:"Feb 10th at 8:30pm",
        reminder:true
    },
    {
        id:5,
        text: "Running",
        day:"Feb 12th at 8:00pm",
        reminder:true
    },
])

  return (
    <div className="container">
      <Header title="Task Tracker"/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;