import React from 'react'
import { shallow } from 'enzyme'
import ProductCard from './ProductCard'

const item = {
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
}

describe('ProductCard tests', () => {
    it('renders card component', () => {
        const component = <ProductCard image={item.picture} price={item.price.amount} title={item.title} currency={item.price.currency} state={item.state}/>
        const wrapper = shallow(component)

        const productCard = wrapper.find('.card')

        expect(productCard).toHaveLength(1)
    })
    it('renders product price with proper currency', () => {
        const component = <ProductCard image={item.picture} price={item.price.amount} title={item.title} currency={item.price.currency} state={item.state}/>
        const wrapper = shallow(component)

        const currency = wrapper.find('ReactCurrencyFormatter').props().currency

        expect(currency).toBe('ARS')
    })
    it('renders product title as a label', () => {
        const component = <ProductCard image={item.picture} price={item.price.amount} title={item.title} currency={item.price.currency} state={item.state}/>
        const wrapper = shallow(component)

        const title = wrapper.find('p').at(0).text()

        expect(title).toBe('iPhone 4S')
    })
    it('renders product selling state as a label', () => {
        const component = <ProductCard image={item.picture} price={item.price.amount} title={item.title} currency={item.price.currency} state={item.state}/>
        const wrapper = shallow(component)

        const sellingState = wrapper.find('p').at(1).text()

        expect(sellingState).toBe('Buenos Aires')
    })
    it('renders product image', () => {
        const component = <ProductCard image={item.picture} price={item.price.amount} title={item.title} currency={item.price.currency} state={item.state}/>
        const wrapper = shallow(component)
        const productImage = wrapper.find('img').props()
        
        expect(productImage.src).toContain('/p/MLA6240114')
    })
    it('renders product shipping icon when is a free shipping', () => {
        const component = <ProductCard image={item.picture} price={item.price.amount} title={item.title} currency={item.price.currency} state={item.state} freeShipping={true}/>
        const wrapper = shallow(component)

        const shippingIcon = wrapper.find('img').at(1)
        
        expect(shippingIcon).toHaveLength(1)
    })
    it('does not render product shipping icon when there is not free shipping', () => {
        const component = <ProductCard image={item.picture} price={item.price.amount} title={item.title} currency={item.price.currency} state={item.state} freeShipping={false}/>
        const wrapper = shallow(component)

        const shippingIcon = wrapper.find('img').at(1)
        
        expect(shippingIcon).toHaveLength(0)
    })
})