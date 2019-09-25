import React from 'react'
import { shallow } from 'enzyme'
import SearchBar from './SearchBar'

describe('SearchBar tests', () => {
    it('renders container', () => {
        const component = <SearchBar />
        const wrapper = shallow(component)

        const container = wrapper.find('div')

        expect(container).toHaveLength(1)
    })
})