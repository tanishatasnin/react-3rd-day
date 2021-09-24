import React from 'react';

const Cart = (props) => {
               const {cart} =props;
               let total=0;
               for(const product of cart){
                              total=total +product.price;
               }
               const shipping = total >15 ? 15:0 ;
               const tax = (total + shipping)* .10;
               const grantTotal = total+ shipping + tax;
                              return (
                              <div>
                                 <h3>Order-Summery:</h3>
                                                        <h3>Items odrered: {props.cart.length}</h3>  
                                                        <br />
                                                        <h4>Total: {total.toFixed(2)}</h4>  
                                                        <p>Shipping : {shipping}</p> 
                                                        <p> tax: {tax.toFixed(2)}</p> 
                                                        <p>grandTotal : {grantTotal.toFixed(2)}</p>      
                              </div>
               );
};

export default Cart;