import React, {useState} from 'react';
import throneData from "./throne.json";
import ThroneFile from "./components/ThroneFile";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";


const App = () => {

  const [thrones, setthrones] = useState(throneData);
  let [count, setCount] = useState(0);
  let [prevScore, setprevScore] = useState(0);
  const [lastId, setlastId] = useState([]);


// on click function which handle increasing score and random characters 
  const handleClickItem = (id) =>  {
 
    console.log(`the ID is ${id}`)

    if (lastId.includes(id)) {

      console.log("yes it is working ")
      
      return gameOver()

    } else {

      setlastId([...lastId, id])
      console.log("hi i can read this")
      count++ ;
      setCount(count);
      choosethrone()
      return
    
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

     const gameOver = () => {

      console.log(`i can make the game end`)
      handleBestscore()
      // choosethrone()
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
    name = {throne.name}
    choosethrone = {choosethrone}
    handleClickItem = {handleClickItem}
    handleBestscore = {handleBestscore}
    gameOver = {gameOver}
    />
    ))}

  </Wrapper>
)
}

export default App;









