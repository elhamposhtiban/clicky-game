import React from "react";
import PropType from "prop-types"
import  "./jumbotron.css";
import background2 from '../../assets/images/4.jpg';


const propType = {

  id: PropType.number.isRequired,
  name: PropType.string.isRequired,
  count: PropType.string.isRequired,
  prevScore: PropType.string.isRequired

}

const backgroundStyle = {
  backgroundImage: `url(${background2})`
};



const Jumbotron = ({

  count,
  name,
  prevScore
})=> {
  return (
  <div className="jumbotron mt-4" style={backgroundStyle}>
      <h1 className="lead third-title"> let see who will sit on the iron throne...</h1>
  </div>
  )
}


Jumbotron.prototype = propType;
export default Jumbotron;




