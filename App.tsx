import * as React from 'react';
import './style.css';

export default function App() {

const [cardList, setCardList] = React.useState([
  {id: 1, order: 3, text: 'карточка 1'},
  {id: 2, order: 1, text: 'карточка 2'},
  {id: 3, order: 2, text: 'карточка 3'},
  {id: 4, order: 4, text: 'карточка 4'},
])
const [currentCard, setCurrentCard] = React.useState(null)



const dragEndTodo = (e) => {
  e.target.style.background =  'white'
}
const onDropTodo = (e, card) => {
  e.preventDefault ()
  setCardList(cardList.map((c)=> {
    if(c.id === card.id) {
return {...c, order: currentCard.order}
    }
    if(c.id === currentCard.id) {
return {...c, order: card.order}
    }
    return c
  }))
}
const onDragOverTodo = (e) => {
e.preventDefault()

}
const dragStartTodo = (e, card) => {
setCurrentCard(card)
e.target.style.background =  'grey'
}

const onDragTodo = (e) => {
}
const sortCards = (a, b) => {
if(a.order > b.order) {
  return 1
} else {
  return -1
}
}

  return (
    <div className='container'>
      {cardList.sort(sortCards).map( card=> {
        return (
          <div 
          className='card' 
          // id={i.id}
          key={ card.id}
          draggable
          onDragStart ={(e)=> dragStartTodo(e, card)}
          onDrop={e => onDropTodo(e, card)}
          onDragOver={e => onDragOverTodo(e)}
          onDragEnd ={(e)=> dragEndTodo(e)}
          onDragLeave={e => onDragTodo(e)}
          >{ card.text}</div>
        )
      })}
    </div>
  );
}
