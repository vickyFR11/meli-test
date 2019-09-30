import React from 'react'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import store from './store'
import Home from '../src/screens/Home/Home'
import './App.scss'
import ProductDetailContainer from './containers/ProductDetailContainer/ProductDetailContainer'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route
          path='/'
          component={Home}
        />
        <Route
          path='/items/:id'
          component={ProductDetailContainer}
        />
      </Router>
    </Provider>
  )
}

export default App
