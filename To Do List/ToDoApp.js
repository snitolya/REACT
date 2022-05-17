import { useState , Fragment} from 'react';
import Table from './Table';


export default function ToDoApp(){

const [ userInput, setUserInput ] = useState('');
const [items , setToDoList] = useState([]);


const handleChange = (e) => {
  setUserInput(e.target.userInput)
}

const addTask = (e) => {
  setToDoList ([...items, userInput]);
  e.preventDefault();
}



return (<Fragment>

<section className="vh-100">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-9 col-xl-7">
        <div className="card rounded-3">
          <div className="card-body p-4">

            <h4 className="text-center my-3 pb-3">To Do App</h4>

            <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2" onSubmit={addTask}>
              <div className="col-12">
                <div className="form-outline">
                  <input type="text" onChange={handleChange} id="form1" className="form-control" placeholder="Enter a task here"/>
                   </div>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary">Save</button>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-warning">Get tasks</button>
              </div>
            </form>
                

            </div>
            <Table items ={items} />
        </div>
      </div>
    </div>
  </div>
</section>

</Fragment>)



 }


    
