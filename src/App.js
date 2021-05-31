import React, { Component } from 'react'
import Card from './Card'

import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
const update = require('immutability-helper');

class App extends Component {
  state = {
    cards: [
      //property - card   key- array
      {id: 1,
        // object 
       text: 'Write a cool JSaaaa library'},
      {id: 2,
       text: 'Make it generic enough'},
      {id: 3,
       text: 'Write README'},
      {id: 4,
       text: 'Create some examples'},  
    ]
  }

  moveCard = (dragIndex, hoverIndex) => {

    const { cards } = this.state
    const dragCard = cards[dragIndex]
   
    this.setState(
      update(this.state, {
        cards: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
        },
      }),
    )
  }

  render() {
    return (
      <div>
        { this.state.cards.map ((el,i) => {
          return (
            <Card key=  {el.id} index={i} id={el.id} text={el.text} moveCard={this.moveCard} />
          )
        })}
        
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(App);

