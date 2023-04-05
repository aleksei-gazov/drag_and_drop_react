import * as React from 'react';
import './style.css';

export default function App() {

const [cardList, setCardList] = React.useState([
  {id: 1, order: 1, text: 'карточка 1'},
  {id: 2, order: 2, text: 'карточка 2'},
  {id: 3, order: 3, text: 'карточка 3'},
  {id: 4, order: 4, text: 'карточка 4'},
])

const onDropTodo = (e) => {

}
const onDragOverTodo = (e) => {

}
const dragStartTodo = (e) => {

}
const dragEndTodo = (e) => {

}
const onDragTodo = (e) => {

}


  return (
    <div className='container'>
      {cardList.map(i=> {
        return (
          <div 
          className='card' 
          id={i.id}
          key={i.id}
          draggable
          onDrop={e => onDropTodo(e)}
          onDragOver={e => onDragOverTodo(e)}
          onDragStart ={(e)=> dragStartTodo(e)}
          onDragEnd ={(e)=> dragEndTodo(e)}
          onDrag={e => onDragTodo(e, card)}
          >{i.text}</div>
        )
      })}
    </div>
  );
}
