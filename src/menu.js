import React, { useState,useEffect } from 'react';
import render from 'react-dom';

const Menu = () =>{
    return (
               <div>
               <div className="Menu-icon">
                   <img src="../assets/menu.png" alt=""></img>
               </div>
               <div className="Menu">
                     <ul>
                        <li>Home</li>
                        <li>Men</li>
                        <li>Women</li>
                    </ul>
               </div>
               <div>
                   <Logo />
               </div>
               <div>
                   <SideImage />
               </div>
               <div>
                   <LinkBtn />
               </div>
               <div className="arrow-1">
                   <ArrowBtn />
               </div>
               <div className="arrow-2">
                   <ArrowBtn />
               </div>
               <div>
                   <Search />
               </div>
               </div>
           )
   } 

   const Logo = () =>{
       return(
           <div className="Logo">
                <img src="../assets/Provoke.png"></img>
                <div className="para"> 
                    <p>Apparently we had reached a great height in the atmosphere,
                    for the sky was a dead black, and the stars had ceased to twinkle.
                    By the same illusion which lifts the horizon of the sea to the level of the 
                    spectator on a hillside, the sable cloud beneath was dished out, and the car 
                    seemed to float in the middle of an immense dark sphere, whose upper
                    half was strewn with silver. Looking down into the dark gulf below, 
                    I could see a ruddy light streaming through a rift in the clouds.
                    </p>
                </div>
           </div>
       )
   }

   const SideImage = () =>{
       return(
           <div className="sideimage">
               <img src="../assets/girl.jpg"></img>
           </div>
       )
   }

   const LinkBtn = () =>{
       return(
           <div className="linkbtn">
               <button>READ MORE</button>
           </div>
       )
   }

   const ArrowBtn = () =>{
       return(
           <div className="arrow">
               <img src="https://image.flaticon.com/icons/svg/271/271226.svg"></img>
           </div>
       )
   }


   const Search = () =>{
       return(
           <div className="search">
               <img src="../assets/search.png"></img>
           </div>
       )
   }

export default Menu;