import React from "react";
import PropType from "prop-types";

const propType = {

    handleSong: PropType.func.isRequired,
}


const Navbar = () => {

   const handleSong = () => {
     const audioElement = $(document).append ("audio");
     audioElement.attr("src", "./assets/song/game-of-thrones");
     if (play===false) {
         audioElement.play();
         play ===  true ;
     } else {
         audioElement.pause()
     }
   }
   return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
       <button onClick={()=> handleSong()} className= " btn btn-danger"> click here for more surprise  </button> 
      </li>
    </ul>
  </div>
</nav> )
}
   
Navbar.prototype = propType;
export default Navbar;