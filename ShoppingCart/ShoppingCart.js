
import { Fragment, useEffect , useState } from 'react';
import CartItem from './CartItem';


 export default function ShoppingCart(){

    const [products, setProducts] = useState([]);
    
    useEffect ( () => {
        async function fetchData(){
            const response = await fetch ('http://192.168.0.200:3000/products')
            const data = await response.json();
            setProducts(data)
        }
        fetchData();
    },[])

    const ChangeItemCount = (id,count)=>{
        setProducts((products)=>{
          products.map(product=>{
              if(product.id===id){
                  return{...product,count};
              }
              return product;
          })
        })  
    }
    
     return (<Fragment>
        <h3 className=''>Shopping Cart</h3>
        <p>3 items in your cart</p>
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
             {products.map(product=> <CartItem onChangeCount={ChangeItemCount} key={product}></CartItem>)}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={6}>

                    </td>
                </tr>
            </tfoot>
        </table>

        </Fragment> )
 }