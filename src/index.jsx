import { createStore, combineReducers } from 'redux'
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Sidebar from './components/Sidebar'
import reducer from './reducers'
import {
  addDeck,
  showAddDeck,
  hideAddDeck
} from './actions'

require('./styles.scss')

const store = createStore(reducer) 

const App = (props) => {
  const { addingDeck, decks } = store.getState()
  return (
    <div className='app'>
      <Sidebar 
        addingDeck={false} 
        decks={decks}
        addDeck={(name) => store.dispatch(addDeck(name))}
        showAddDeck={() => store.dispatch(showAddDeck())}
        hideAddDeck={() => store.dispatch(hideAddDeck())}
      />
    </div>
  )
}


store.dispatch({
  type: 'ADD_CARD',
  data: {
    front: 'front',
    back: 'back'
  }
})

store.dispatch({
  type: 'ADD_CARD',
  data: {
    front: 'front',
    back: 'back'
  }
})


function run () {
  ReactDOM.render(<App />, document.getElementById('root'))
}

run()
store.subscribe(run)
