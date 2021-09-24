import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import './Shop.css'

const Shop = () => {
               const [products ,setProducts] =useState([]);
const [cart,setCart]=useState([])
               useEffect(()=>{
                       fetch('./products.JSON')  
                       .then(res=>res.json())   
                       .then(data=>setProducts(data))  
               },[])

               useEffect(()=>{
                       if(products.length){
                       const savedCart = getStoredCart();
                       const storedCart =[];
                       for(const key in savedCart){
                        //     console.log(key) ;
                            const addProduct =products.find(product =>product.key===key);
                            storedCart.push(addProduct);
                        }
                        setCart(storedCart);
                         }
                       
               },[products])
               const handelAdd =(product)=>{
                //        console.log(product)
                const newCart =[...cart,product];
                setCart(newCart);
                // save to fore now storage.. 
                addToDb(product.key)
               }
               return (
                       <div>
                              
                       <div className="shop-container">

                                 <div className="product-container">
                                         
                                                <h3> Products:{products.length}</h3>
                                                {
                                                               products.map(product =><Product
                                                                           key={product.key}
                                                                           product={product} 
                                                                           handelAdd ={handelAdd}
                                                                           ></Product>)
                                                }
                                 </div>
                                         <div className="card-container">
                                                        <Cart cart={cart}></Cart>
                                         </div>
                              </div>
                       </div>

                              
               );
};

export default Shop;