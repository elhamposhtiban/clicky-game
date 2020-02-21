import React from "react";
import PropType from "prop-types"
import  "./jumbotron.css";


const propType = {

  id: PropType.number.isRequired,
  name: PropType.string.isRequired,
  count: PropType.string.isRequired,
  prevScore: PropType.string.isRequired

}



const Jumbotron = ({

  count,
  name,
  prevScore
})=> {
  return (
  <div className="jumbotron">
      <h1 className="display-4 title">Welcome to Clicky game!</h1>
      <hr className="my-4"/>
      <h1 className="lead second-title"> YOUR BEST SCORE IS  : {prevScore} </h1>
      <h1 className="lead second-title">  YOUR CURRENT SCORE IS  : {count} </h1>
  </div>
  )
}


Jumbotron.prototype = propType;
export default Jumbotron;




