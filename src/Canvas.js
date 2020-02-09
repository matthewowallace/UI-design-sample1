import React, { useState,useEffect } from 'react';
import render from 'react-dom';

class FavouriteColor extends React.Component{

    state = { value: ''}

    newcolor = e =>
        this.setState({value: e.target.value})

    submit = e =>{
        console.log(`New Color: ${this.state.value}`)
        e.preventDefault()
    }

    render(){
        return(
             <div>
                 <form onSubmit={this.submit}>
                    <label>Favourite Color:
                        <input 
                                type="color"
                                onChange={this.newcolor}/>
                    </label>
                    <button>Submit</button>
                 </form>
             </div>
        )
    }

}

export default FavouriteColor;