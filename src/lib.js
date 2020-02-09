import React, { useState,useEffect } from 'react';
import render from 'react-dom';



const ProductImage = () =>{
 return (
            <div className="product-image">
                <img src="https://contents.mediadecathlon.com/p1419921/k$72b461620e3e5ec61db942355362dd66/8486177.jpg?&f=x" alt="" />
                <button>View</button>
            </div>
        )
} 

const SizeSelector = () =>{

    function sizeOptions(){
 
    };

    return(
        <div className="field-group">
            <label htmlFor="size-options">Size: </label>
            <select name ="sizeOptions" id="sizeoptions">
              
            </select>
        </div>
    )
}


const ProductCustomizer = () =>{
    
        return(
                <div className="Custom">
                    <p>Product</p>
                        <div className="Pi">
                            <ProductImage />
                        </div>
                        <div className="Ss">
                            <SizeSelector />
                        </div>

                </div>
        ) 
}
export default ProductCustomizer;