
import React from "react";
import PropType from "prop-types";
import  "./throne.css"
import Jumbotron from "../Jumbotron";


const propType = {

    id: PropType.number.isRequired,
    name: PropType.string.isRequired,
    src: PropType.string.isRequired,
    choosethrone:PropType.func.isRequired,
    handleCount: PropType.func.isRequired,
}

 const ThroneFile = ({
id,
name,
image,
handleCount,
 }) => ( 


 <div className="card">
 <div className= "img-fluid img-thumbnail img-container">
     <img src = {image} alt = {name}/>
 </div>
 
 <button onClick={()=> handleCount(id)} className= " remove btn btn-primary"> hi</button>
 </div>
 )


 
 ThroneFile.prototype = propType;
 export default ThroneFile
 