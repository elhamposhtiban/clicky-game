
import React from "react";
import PropType from "prop-types";
import  "./throne.css"
import Jumbotron from "../Jumbotron";


const propType = {

    id: PropType.number.isRequired,
    name: PropType.string.isRequired,
    src: PropType.string.isRequired,
    choosethrone:PropType.func.isRequired,
    handleClickItem: PropType.func.isRequired,
}

 const ThroneFile = ({
id,
name,
image,
handleClickItem,
 }) => ( 


 <div className="card image-btn">

     <div className= "img-fluid img-thumbnail img-container">
     <img src = {image} alt = {name} onClick={()=> handleClickItem(id)} className="btn"/> 
     </div>
     
 </div>
 )


 
 ThroneFile.prototype = propType;
 export default ThroneFile


