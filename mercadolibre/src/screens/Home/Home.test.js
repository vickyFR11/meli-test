import React from 'react'
import { shallow } from 'enzyme'
import Home from './Home'

describe('Tests for Home screen', () => {
    it('renders a home component', () => {
        const component = <Home />
        const wrapper = shallow(component)

        const home = wrapper.find('div')

        expect(home).toHaveLength(1)
    })
})