import React from "react";
import PropType from "prop-types"
import  "./jumbotron.css";


const propType = {

  id: PropType.number.isRequired,
  count: PropType.string.isRequired,
  prevScore: PropType.string.isRequired

}



const Jumbotron = ({

  count,
  prevScore
})=> {
  return (
  <div className="jumbotron">
      <h1 className="display-4">Welcome to Clicky game!</h1>
      <h2 className="lead"> YOUR BEST SCORE IS  : {prevScore} </h2>
  <h2 className="lead">  YOUR CURRENT SCORE IS  : {count} </h2>
      <hr className="my-4"/>
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  </div>
  )
}


Jumbotron.prototype = propType;
export default Jumbotron;




