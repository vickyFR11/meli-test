import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

it('has a router with route to first page (home)', () => {
  const component = <App />
  const wrapper = shallow(component)

  const routeComponentProps = wrapper.find('Route').props()

  expect(routeComponentProps.path).toBe('/')
})
