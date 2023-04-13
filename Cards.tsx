import * as React from 'react';
import './Card.css'

export const Cards =() => {
  const [cardList, setCardList] = React.useState([
    {id: 1, order: 3, title: 'карточка 1', items :[{id: 1, title: 'aaa'}, {id: 2, title: 'bbb'}, {id: 3, title: 'c'}]},
    {id: 2, order: 1, title: 'карточка 2', items :[{id: 4, title: 'd'}, {id: 5, title: 'e'}, {id: 6, title: 'f'}]},
    {id: 3, order: 2, title: 'карточка 3', items :[{id: 7, title: 'g'}, {id: 8, title: 'h'}, {id: 9, title: 'i'}]},
    {id: 4, order: 4, title: 'карточка 4', items :[{id: 10, title: 'j'}, {id: 11, title: 'k'}, {id: 12, title: 'l'}]},
  ])

  const [currentCard, setCurrentCard] = React.useState(null)

const  dragStartTodo = (e) => {
  e.target.style.background =  'grey'
  }
  const dragEndTodo = (e) => {
    e.target.style.background =  'white'
    
  }
  const onDragTodo = (event, todo) => {
    event.preventDefault();
    // this.setState({
    //   draggedTask: todo
    // });
  };



return (
  <div className={'container'}> 
 {cardList.map(card=> {
    return (
      <div className='cardList'>
      <div>{card.title}</div>
      {card.items.map(i=> {
        return (
          <div className='item'
          // id={i.id}
          key={i.id}
          draggable
          onDragStart ={(e)=> dragStartTodo(e)}
          onDragEnd ={(e)=> dragEndTodo(e)}
          onDrag={event => onDragTodo(event,i)}
          >
            {i.title}
          </div>
        )
      })}
      </div>
    )
  })}
  </div>
 
)
}