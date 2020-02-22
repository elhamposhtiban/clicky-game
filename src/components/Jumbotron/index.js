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
  <div className="jumbotron mt-4">
      <h1 className="display-4 title">Welcome to Thrones game!</h1>
      <hr className="my-4"/>
      <h1 className="lead third-title"> let see who will sit on the iron throne...</h1>
      <h1 className="lead second-title"> YOUR BEST SCORE : {prevScore} </h1>
      <h1 className="lead second-title">  YOUR  SCORE : {count} </h1>
  </div>
  )
}


Jumbotron.prototype = propType;
export default Jumbotron;




