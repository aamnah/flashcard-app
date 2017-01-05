import React, { Component, PropTypes } from 'react'

export default class Sidebar extends Component {
  render () {
    const { decks, addingDeck } = this.props
    
    return (
      <div className='sidebar'>
        <h2>All Decks</h2>
        <ul>
          {decks.map(deck => 
            <li key={deck.name}>{deck.name}</li>
          )}
        </ul>
        {addingDeck && <input ref='add' />} 
      </div>
    )

  }
}

Sidebar.propTypes = {
  addingDeck: PropTypes.bool,
  decks: PropTypes.array
}
