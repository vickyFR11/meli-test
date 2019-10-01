import React from 'react'
import { shallow } from 'enzyme'
import ProductDetail from './ProductDetail'

const match = {
    params: { id: 'MLA798719279' }
}

const productDetail = {
    price: { currency: 'ARS', amount: 86999, decimals: 0 },
    id: 'MLA798719279',
    title: 'Apple iPhone Xr Dual Sim 128 Gb Negro',
    picture: 'http://mla-s2-p.mlstatic.com/637450-MLA31002678143_062019-O.jpg',
    condition: 'new',
    free_shipping: true,
    sold_quantity: 15,
    description: 'Es un iPhone Xr completamente nuevo'
}

describe('ProductDetail tests', () => {
    it('renders component when there is information to display', () => {
        const component = <ProductDetail match={match} onMount={jest.fn()} productDetail={productDetail}/>
        const wrapper = shallow(component)

        const productDetailComponent = wrapper.find('.details-container')
        expect(productDetailComponent).toHaveLength(1)
    })

    it('does not render component when product detail is empty', () => {
        const component = <ProductDetail match={match} onMount={jest.fn()} productDetail={{}}/>
        const wrapper = shallow(component)

        const productDetailComponent = wrapper.find('.details-container')
        expect(productDetailComponent).toHaveLength(0)
    })

    it('renders image from product detail', () => {
        const component = <ProductDetail match={match} onMount={jest.fn()} productDetail={productDetail}/>
        const wrapper = shallow(component)

        const image = wrapper.find('img')
        expect(image).toHaveLength(1)
    })

    it('renders new condition and quantity as label when product is new', () => {
        const component = <ProductDetail match={match} onMount={jest.fn()} productDetail={productDetail}/>
        const wrapper = shallow(component)

        const conditionLabel = wrapper.find('p').at(0).text()
        expect(conditionLabel).toBe('Nuevo - 15 vendidos')
    })

    it('renders used condition and quantity as label when product is used', () => {
        productDetail.condition = 'used'
        const component = <ProductDetail match={match} onMount={jest.fn()} productDetail={productDetail}/>
        const wrapper = shallow(component)

        const conditionLabel = wrapper.find('p').at(0).text()
        expect(conditionLabel).toBe('Usado - 15 vendidos')
    })

    it('renders title', () => {
        const component = <ProductDetail match={match} onMount={jest.fn()} productDetail={productDetail}/>
        const wrapper = shallow(component)

        const title = wrapper.find('p.title').text()
        expect(title).toBe('Apple iPhone Xr Dual Sim 128 Gb Negro')
    })

    it('renders price', () => {
        const component = <ProductDetail match={match} onMount={jest.fn()} productDetail={productDetail}/>
        const wrapper = shallow(component)

        const currenyComponent = wrapper.find('ReactCurrencyFormatter').props()
        expect(currenyComponent.quantity).toBe(86999)
        expect(currenyComponent.currency).toBe('ARS')
    })

    it('renders buy button', () => {
        const component = <ProductDetail match={match} onMount={jest.fn()} productDetail={productDetail}/>
        const wrapper = shallow(component)

        const button = wrapper.find('button.buy-button')
        expect(button).toHaveLength(1)
        expect(button.text()).toBe('Comprar')
    })

    it('renders description title', () => {
        const component = <ProductDetail match={match} onMount={jest.fn()} productDetail={productDetail}/>
        const wrapper = shallow(component)

        const descriptionTitle = wrapper.find('h4.description-title').text()
        expect(descriptionTitle).toBe('Descripción del producto')
    })

    it('renders product description', () => {
        const component = <ProductDetail match={match} onMount={jest.fn()} productDetail={productDetail}/>
        const wrapper = shallow(component)

        const descriptionContent = wrapper.find('p.description-content').text()
        expect(descriptionContent).toBe('Es un iPhone Xr completamente nuevo')
    })
})