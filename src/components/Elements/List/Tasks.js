import Task from "../../Task"

const Tasks = ({ tasks , onDelete, onToggle}) => {
  return (
    <>
    {
    tasks.map((task) => 
        <Task 
        key={task.id} 
        onToggle={onToggle} 
        task={task} 
        onDelete={() => onDelete(task.id)} /> 
    )}
    </>
    
  )
}

export default Tasks