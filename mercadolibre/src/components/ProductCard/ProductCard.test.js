import React from 'react'
import { shallow } from 'enzyme'
import ProductCard from './ProductCard'

describe('ProductCard tests', () => {
    it('renders component', () => {
        const component = <ProductCard />
        const wrapper = shallow(component)

        const productCard = wrapper.find('div')

        expect(productCard).toHaveLength(1)
    })
    it('renders product price as a label', () => {
        const component = <ProductCard />
        const wrapper = shallow(component)

        const priceLabel = wrapper.find('h4').text()

        expect(priceLabel).toBe('$2.000')
    })
    it('renders product title as a label', () => {
        const component = <ProductCard />
        const wrapper = shallow(component)

        const title = wrapper.find('p').at(0).text()

        expect(title).toBe('iPhone 4S')
    })
    it('renders product selling state as a label', () => {
        const component = <ProductCard />
        const wrapper = shallow(component)

        const sellingState = wrapper.find('p').at(1).text()

        expect(sellingState).toBe('Capital Federal')
    })
    it('renders product image', () => {
        const component = <ProductCard />
        const wrapper = shallow(component)

        const image = wrapper.find('img')

        expect(image).toHaveLength(1)
    })
})