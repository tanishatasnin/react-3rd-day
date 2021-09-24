import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
               // console.log(props.product);
               const { name,img,seller,price,stock }=(props.product);
               const element = <FontAwesomeIcon icon={faCoffee} />

               return (
                              <div className='product'>
                                   <div>
                                        <img src={img} alt="" />
                                   </div>
                                   <div>
                                   <h4 className='pro-name'> {name} </h4> 
                                   <p><small>by:{seller}</small></p>
                                   <p>Price:{price}</p>
                              <p><small>only {stock} left in stock - order soon</small></p>

                              <Rating></Rating>

                              <button
                              onClick={()=>props.handelAdd(props.product)}
                              className='button-cart'>{element} add to cart</button>
                                   </div>
                                   
                              </div>
                              
               );
};

export default Product;