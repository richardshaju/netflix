import React, { useState, useEffect } from 'react'
import "./NavBar.css"

function NavBar() {

   const [color, setColor] = useState('');

   const listenScrollEvent = () => {
      if (window.scrollY > 400) {
         setColor('rgba(0, 0, 0, 10');
      } else {
         setColor('');
      }
   };
   useEffect(() => {
      window.addEventListener('scroll', listenScrollEvent);
   })
   return (
      <div className='navbar' style={{ backgroundColor: color }}>

         <div className='left'>
            <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix logo" />
           <div className='navlinks'>
               <nav>
                  <ul>
                     <li>
                        <p>Home</p>
                     </li>
                     <li>
                        <p>TV Shows</p>
                     </li>
                     <li>
                        <p>Movies</p>
                     </li>
                     <li>
                        <p>Series</p>
                     </li>
                  </ul>
               </nav>
            </div>
         </div>
         <div></div>
         <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
      </div>
   )
}

export default NavBar