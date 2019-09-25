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
    it('renders mercadolibre logo at left', () => {
        const component = <SearchBar />
        const wrapper = shallow(component)

        const logo = wrapper.find('img')

        expect(logo).toHaveLength(1)
        expect(logo.props().src).toBe('ml_logo.png')
        expect(logo.props().alt).toBe('logo')
    })
    it('renders text input', () => {
        const component = <SearchBar />
        const wrapper = shallow(component)

        const textInput = wrapper.find('input').props()

        expect(textInput.type).toBe('text')
        expect(textInput.alt).toBe('buscador')
        expect(textInput.placeholder).toBe('Nunca dejes de buscar')
    })
    it('renders search button', () => {
        const component = <SearchBar />
        const wrapper = shallow(component)

        const button = wrapper.find('button')

        expect(button).toHaveLength(1)
    })
})