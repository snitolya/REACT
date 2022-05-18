import {Fragment} from "react";


export default function Table(props){/* получаем  items*/ 


  return(
    <Fragment>
      <table className="table mb-4">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Todo item</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {props.items.map(item => <tr>
                  <th scope="row">1</th>
                  <td>{item}</td>
                  <td>In progress</td>
                  <td>
                    <button type="submit" className="btn btn-danger" onClick={props.removeTask}>Delete</button>
                    <button type="submit" className="btn btn-success ms-1">Finished</button>
                  </td>
                </tr>)}
                
              </tbody>
            </table>
             
    </Fragment>
  )
}
