
import React from "react";
import PropType from "prop-types";


const propType = {

    id: PropType.number.isRequired,
    src: PropType.string.isRequired
}

 const MinionFile = ({
id,
image
 }) => ( 


 <div className="card">
 <div className= "img-container">
     <img src = {image}/>
 </div>

 <button className= "btn btn-primary"> hi</button>
 </div>
 )


 
 MinionFile.prototype = propType;
 export default MinionFile
 