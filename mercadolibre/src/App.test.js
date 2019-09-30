import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App tests', () => {
  it('has first route defined home', () => {
    const component = <App />
    const wrapper = shallow(component)
  
    const homeRoute = wrapper.find('Route').at(0).props()
  
    expect(homeRoute.path).toBe('/')
  })

  it('has route defined for items', () => {
    const component = <App />
    const wrapper = shallow(component)
  
    const itemsRoute = wrapper.find('Route').at(1).props()
  
    expect(itemsRoute.path).toContain('/items')
  })
})

