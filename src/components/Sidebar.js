import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

export default class Sidebar extends Component {
  
  createDeck (e) {
    const { addDeck, hideAddDeck } = this.props
    
    if (e.which !== 13) return

    const name = ReactDOM.findDOMNode(this.refs.add)
    addDeck(name)
    hideAddDeck()
  }
  
  render () {
    const { decks, addingDeck, showAddDeck } = this.props
    
    return (
      <div className='sidebar'>
        <h2>All Decks</h2>
        
        <button onClick={e => showAddDeck }>New Deck</button>

        <ul>
          {decks.map(deck => 
            <li key={deck.name}>{deck.name}</li>
          )}
        </ul>
        {addingDeck && <input ref='add' onKeyPress={this.createDeck}/>} 
      </div>
    )

  }
}

Sidebar.propTypes = {
  addingDeck: PropTypes.bool,
  decks: PropTypes.array
}
