import {useState} from 'react'


const AddTask = ({onAdd}) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text){
            alert('please enter a text')
            return false;
        }
        onAdd({text,day,reminder})
        setText('')
        setDay('')
        setReminder(false)
    }
    
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="">Task</label>
                <input type="text" placeholder="Add Task" onChange={(e)=> setText(e.target.value)} value={text}/>
            </div>
            <div className="form-control">
                <label htmlFor="">Day & Time</label>
                <input type="text" placeholder="Add Day & Time" onChange={(e)=> setDay(e.target.value)} value={day}/>
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="">Set Reminder</label>
                <input type="checkbox" checked={reminder}  onChange={(e)=> setReminder(e.currentTarget.checked) } value={reminder}/>
            </div>
            <input type="submit" className="btn btn-block" value="Save Task"/>
        </form>
    )
} 

export default AddTask