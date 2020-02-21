import React, {useState} from 'react';
import throneData from "./throne.json";
import ThroneFile from "./components/ThroneFile";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
// import {
//   Wrapper,
//   MinionFile
// } from "./components";

const App = () => {

  const [thrones, setthrones] = useState(throneData);
  let [count, setCount] = useState(0);
  let [prevScore, setprevScore] = useState(0);
  const [lastId, setlastId] = useState();

// on click function which handle increasing score and random characters 
  const handleCount = (id) =>  {


      console.log(`ID ${id}`)

    if (id !== lastId) {
      setlastId(id);
      console.log ((id !== lastId))
      count++ ;
      setCount(count);
      choosethrone()
      handleBestscore()
      return
    } else {
      console.log("yes it is working ")
    }
   
  }

   const choosethrone = () => {

    setthrones(thrones.sort(() => Math.random() - 0.5))

     }

     const handleBestscore = () => {
       
       const currentScore = count;
       console.log (`this is current score ${currentScore}`)
       let  newBestScore = 0;
       if (currentScore> prevScore) {
        newBestScore = currentScore;
        console.log(`this is new best score ${newBestScore}`)
         setprevScore(newBestScore);
         return
       } else {
        newBestScore = prevScore;
        setprevScore(newBestScore);
       }
     }



return (
  
  <Wrapper>
    <Jumbotron
    count = {count}
    prevScore = {prevScore}/>


    {thrones.map(throne => (
    <ThroneFile
    id = {throne.id}
    key = {throne.id}
    image = {throne.image}
    choosethrone = {choosethrone}
    handleCount = {handleCount}
    handleBestscore = {handleBestscore}
    />
    ))}

  </Wrapper>
)
}

export default App;







