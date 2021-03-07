import Task from './Task'

const Tasks = ({tasks}) => {
    return (
        <>
            { tasks.map((task, index)=>{ return (
                <Task key={index} task={task} /> 
            )}) }
        </>
    )
}

export default Tasks
