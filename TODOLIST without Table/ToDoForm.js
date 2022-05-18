import {useState} from "react";

export default function ToDoForm({addTask}){

  const[userInput,setUserInput] = useState('');

  const handleChange = (e) =>{
    setUserInput(e.currentTarget.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    addTask(userInput)
    setUserInput('')

  }

  const handleKeyPress = (e) =>{
    if(e.key === "Enter"){
      handleSubmit(e)
    }

  }

  return (
    
    <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2" onSubmit={handleSubmit}>
    <div className="col-12">
      <div className="form-outline">
        <input type="text" id="form1" value={userInput}  onKeyDown={handleKeyPress} className="form-control" onChange={handleChange}  placeholder="Enter a task here"/>
      </div>
    </div>

    <div className="col-12">
      <button type="submit" className="btn btn-primary">Save</button>
    </div>

    <div className="col-12">
      <button type="submit" disabled className="btn btn-warning" >Get tasks</button>
    </div>
  </form>
  )
}