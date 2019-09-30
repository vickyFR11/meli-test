import React from 'react'
import { shallow } from 'enzyme'
import List from './List'

const item = [{
    id: 'MLA801616914',
    title: 'iPhone 4S',
    price: {
        currency: 'ARS',
        amount: 12000,
        decimals: 0
    },
    picture: 'https://www.mercadolibre.com.ar/p/MLA6240114',
    condition: 'new',
    free_shipping: true,
    state: 'Buenos Aires'
}]

describe('List tests', () => {
    it('renders list component', () => {
        const component = <List items={item}/>
        const wrapper = shallow(component)

        const div = wrapper.find('.list-container')
        
        expect(div).toHaveLength(1)
    })
    it('renders a ProductCard as a child', () => {
        const component = <List items={item}/>
        const wrapper = shallow(component)

        const productCardComponent = wrapper.find('ProductCard')
        
        expect(productCardComponent).toHaveLength(1)
    })
})