import { Fragment, useEffect , useState } from 'react';


 export default function CartItem(props){
    const [product, setProduct] = useState(props.product)
    const updateCount =(e)=>{
        setProduct({...product,count:Number(e.target.value)})
        props.onChangeCount(product.id, e.target.value);
 }
return (<tr>
    <td><img className='' src={product.image} alt="" /> </td>
    <td>{product.name}{product.brand} </td>
    <td>{product.price} </td>
    <td>
        <input
        type="number"
        onChange={updateCount}
        className=''
        value={product.count}/>
         </td>
         <td>{product.count*product.price}</td>
         <td>
             <div className=''> </div>
             <button className=''></button>
         </td>
</tr>)
 }
