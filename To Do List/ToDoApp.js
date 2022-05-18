import {Fragment, useState} from "react";
import Table from './Table';

export default function ToDoApp(){
const[value,setValue] = useState('');
const[items,setItems] = useState([]);


const ChangeInput = (e)=>{
  setValue(e.target.value);
}
const AddTask = (e)=>{
  setItems([...items, value]);/*... - это диструктуризация*/
  e.preventDefault();
 
}

const removeTask =(id) => {
  setItems([...items.filter((el) => el.id !== id)])

}



  return(
  <Fragment>
  
       <section className="vh-100" >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-9 col-xl-7">
        <div className="card rounded-3">
          <div className="card-body p-4">

            <h4 className="text-center my-3 pb-3">To Do App</h4>

            <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2" onSubmit={AddTask}>
              <div className="col-12">
                <div className="form-outline">
                  <input type="text" id="form1" className="form-control" onChange={ChangeInput}  placeholder="Enter a task here"/>
                </div>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary">Save</button>
              </div>

              <div className="col-12">
                <button type="submit" disabled className="btn btn-warning" >Get tasks</button>
              </div>
            </form>
            </div>
            {/* передаем наши items в компоненту Table и туда они приходят в виде пропсов */}
         <Table items={items}
         key={items.id}
           removeTask={removeTask}
         /> 
        </div>
      </div>
    </div>
  </div>
</section> 

    </Fragment>
  )
}


    
