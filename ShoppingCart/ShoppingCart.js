
import { Fragment, useEffect , useState } from 'react';
import CartItem from './CartItem';


 export default function ShoppingCart(){

    const [products, setProducts] = useState([]);
    
    useEffect ( () => {
        async function fetchData(){
            const resp = await fetch ('http://192.168.0.200:3000/products')
            const data = await response.json();
            setProducts(data);
        }
        fetchData();
    },[])

    const changeItemCount = (id,count)=>{
        setProducts((products)=>
          products.map(product=>{
              if(product.id===id){
                  return{...product,count};
              }
              return product;
          })
        })  
    }

const removeItem = (id) => {
 setProducts (products.filter(p=> p.id!==id));
}
const checkout = async ()=>{
  const response = await fetch ('http://192.168.0.200:3000/products')
  {
method:"POST",
 headers:{
'Content-Type':'application/json'
 },
if(response.status ===200 ){
 alert( 'WIN' );
 
    
     return (<Fragment>
        <h3 className=''>Shopping Cart</h3>
        <p>4 items in your cart</p>
        <table className='table'>
        <thead>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th> 
                <th>Sub Total</th> 
                <th>Action</th> 
            </tr>
            </thead>
            <tbody>
             {products.map(product=> 
             <CartItem 
             onRemove ={removeItem}
             onChangeCount={ChangeItemCount} 
             key={product.id}
             product ={product}/>
             )}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={6}>
                    <h4 className=''>{products.reduce((acc,p)=> acc + p
                    <button className='' onClick={checkout}>
                    </td>
                </tr>
            </tfoot>
        </table>

        </Fragment> )
 }
