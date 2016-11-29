// Libs
import {createStore, combineReducers} from 'redux'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

// Styles
require('./styles.scss')

// REDUCER 
const cards = (state, action) => { // state here is the current value of the cards prop
  // make a change to the state based on the action
  switch(action.type) {
    // if action.type is ADD_CARD
    case 'ADD_CARD': 
      // create a newCard object
      let newCard = Object.assign({}, action.data, { // take a fresh empty object, and add action.data
        score: 1,
        id: +new Date // the unary + operator here will take a Date object (a single moment in time) and convert it to a number. Good lazy way to always get unique IDs
      }) 

      // you have a new card, return the updated state for the cards array
      return state.concat([newCard]) // state here is just the current value of cards array


    default:
      // when page is first loaded (score hasn't been added), state is going to be undefined
      // if state is undefined (falsy), return an empty array (cz that's the default value for the cards array)
      return state || []
  }
}

// STORE
// .createStore(reducer, [preloadedState], [enhancer]) 
// .combineReducers() turns an object whose values are different reducing functions 
// into a single reducing function, which you can pass to .createStore()
const store = createStore(combineReducers({
  // keys: top level values of our state object
  // values: reducer functions
  // cards: cards
  cards // thanks to ES6, we can just say it once if both the prop and the value are the same
})) 


const App = (props) => {
  return (
    <div className='app'>
      <h1>Bonjour la monde!</h1>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))