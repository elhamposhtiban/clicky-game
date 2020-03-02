import React, {useState} from 'react';
import { Shake } from 'reshake'
import throneData from "./throne.json";
import ThroneFile from "./components/ThroneFile";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";


const App = () => {

  const [thrones, setthrones] = useState(throneData);
  let [count, setCount] = useState(0);
  let [prevScore, setprevScore] = useState(0);
  const [lastId, setlastId] = useState([]);
  const [shakeNow, setShakeNow] = useState(false)


// on click function which handle increasing score and random characters 
  const handleClickItem = (id) =>  {
 
    console.log(`the ID is ${id}`)

    if (lastId.includes(id)) {

      console.log("yes it is working ")
       handleShake(true)
       gameOver()
     
       return 
      
    } else {

      setlastId([...lastId, id])
      console.log("hi i can read this")
      count++ ;
      handleShake(false)
      setCount(count);
      choosethrone()
      return
    }
  
  }

  //handle shake function 
  const handleShake = (value) => {
    setShakeNow(value)

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
      setTimeout(function(){ window.location.reload(true)}, 2000);
      handleBestscore()
    }

return (
  <Shake active={shakeNow}>
      <Navbar
          count = {count}
          prevScore = {prevScore}/>
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
  </Shake>
)
}

export default App;







// const  handleFormSubmit = event => {

//   console.log(`heey i am reding this part`)
//   event.preventDefault();
//   if (setTitle[title] || setAthor[author]) {
//     API.searchBook(
//       setTitle[title] + setAthor[author]
//     )
//       .then(res => {

//         let newArray = [];
//         books.data.items.map(book => {
//           return {
//             title: book.volumeInfo.title,
//             authors: book.volumeInfo.authors,
//             description: book.volumeInfo.description,
//             image: book.volumeInfo.imageLinks,
//             link: book.volumeInfo.previewLink,
//           }
//         }).push = newArray;
//         setBooks[newArray];
//       })
//       .catch((err) => console.log(err));
//   }
// };

// return (
//   <Container fluid>
//     <Row>
//       <Col size="md-12">
//         <form>
//           <SearchInput
//             value={title}
//             handleInputChange = {handleInputChange}
//           />
//           <FormBtn
//             handleFormSubmit = {handleFormSubmit}
//           >
//             Search
//           </FormBtn>
//         </form>
//       </Col>
//       <Col size="md-12">
//         {Books.length ? (
//           <Col
//             size="md-12"
//           >
//             {books.map(book => (
//               <BookResult
//                 book={book}
//                 search={true}
//               ></BookResult>
//             ))}
//           </Col>
//         ) : (
//             <h3>No Results to Display</h3>
//           )}
//       </Col>
//     </Row>
//   </Container>
// );






