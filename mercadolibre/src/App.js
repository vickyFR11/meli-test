import React from 'react'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import store from './store'
import Home from '../src/screens/Home/Home'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route
          path='/'
          component={Home}
        />
      </Router>
    </Provider>
  )
}

export default App
