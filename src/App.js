import { useEffect, useState } from 'react';
import './App.css'
import { SingleCard } from './components/SingleCard';

const cardsImages = [
  {"src":"img/helmet-1.png",matched:false},
  {"src":"img/potion-1.png",matched:false},
  {"src":"img/ring-1.png",matched:false},
  {"src":"img/scroll-1.png",matched:false},
  {"src":"img/shield-1.png",matched:false},
  {"src":"img/sword-1.png",matched:false}
]

function App() {
  const [cards,setCards] = useState([]);
  const [turns,setTurns] = useState(0);
  const [choiseOne,setChoiseOne] = useState(null);
  const [choiseTwo,setChoiseTwo] = useState(null);
  const [disabled,setDisabled] = useState(false);


  useEffect(()=>{
    if(choiseOne && choiseTwo){
        setDisabled(true);
        if(choiseOne.src === choiseTwo.src){
          setCards((prevCards)=>{
            return prevCards.map((card)=>{
              if(card.src===choiseOne.src){
                return {...card,matched:true}
              }
              else{
                return card;
              }
            })
          })
        }
        setTimeout(resetTurn, 1000);
      }
      
    },[choiseOne,choiseTwo])


    useEffect(()=>{
      newGame()
    },[])
  const newGame = () => {

    const shuffledCards = [...cardsImages,...cardsImages]
    .sort(()=>Math.random() - 0.5)
    .map((card,i)=> ({...card,"id":i}))
    
    setCards(shuffledCards);
    setTurns(0);
  }

  const handleChoise = (card) => {
    if(!disabled){

      choiseOne? setChoiseTwo(card) :setChoiseOne(card);
    }
  }

  const resetTurn = () => {
    setChoiseOne(null);
    setChoiseTwo(null);
    setTurns(turns+1)
    setDisabled(false)

  }


  return (
    <div className="App">
      <h1>Magic Match</h1>
      <h3>turns:{turns}</h3>
      <div className='card-grid'>
        {cards.map(card=>(
          <SingleCard key={card.key} card={card} handleChoise={handleChoise} fliped={card == choiseOne || card == choiseTwo || card.matched}/>
        ))}
      </div>
      <button onClick={newGame}>New Game</button>
    </div>
  );
}

export default App