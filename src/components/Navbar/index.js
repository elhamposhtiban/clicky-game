import React from "react";
// import PropType from "prop-types";
import "./style.css"

// const propType = {

//   count: PropType.string.isRequired,
//   prevScore: PropType.string.isRequired,
//     // handleSong: PropType.func.isRequired,
// }


const Navbar = (props)=> {
  //  const handleSong = () => {
  //    const audioElement = $(document).append ("audio");
  //    audioElement.attr("src", "./assets/song/game-of-thrones");
  //    if (play===false) {
  //        audioElement.play();
  //        play ===  true ;
  //    } else {
  //        audioElement.pause()
  //    }
  //  }
   return (
<nav className="navbar navbar-expand-lg  navbar-style sticky-top">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      {/* <li className="nav-item">
       <button onClick={()=> handleSong()} className= " btn btn-danger"> click here for more surprise  </button> 
      </li> */}
      <li className="nav-item">
      <h1 className="lead second-title">  YOUR  SCORE : {props.count} </h1>
      </li>
      <li className="nav-item">
      <h1 className="lead second-title"> YOUR BEST SCORE : {props.prevScore} </h1>
      </li>
      
    </ul>
  </div>
</nav> )
}
   
export default Navbar;