import React from 'react'
import { shallow } from 'enzyme'
import { mockedStore } from '../../config/testsConfiguration'
import * as detailsModule from '../../modules/details/details'
import ProductDetailContainer from './ProductDetailContainer'

jest.mock('../../modules/details/details')

const productDetails = {
    author: { name: 'Victoria', lastname: 'Fuenmayor' },
    item:
    {
        price: { currency: 'ARS', amount: 86999, decimals: 0 },
        id: 'MLA798719279',
        title: 'Apple iPhone Xr Dual Sim 128 Gb Negro',
        picture: 'http://mla-s2-p.mlstatic.com/637450-MLA31002678143_062019-O.jpg',
        condition: 'new',
        free_shipping: true,
        sold_quantity: 0,
        description: undefined
    }
}

describe('Container Product Detail tests', () => {
    beforeEach(() => {
        detailsModule.getDetails.mockReturnValue(productDetails)
    })

    it('product details is passed as a prop', () => {
        const component = <ProductDetailContainer store={mockedStore} />
        const wrapper = shallow(component).shallow()
        const productDetailsProp = wrapper.props().productDetail

        expect(productDetailsProp).toEqual(productDetails)
    })

    it('calls details thunk when mounting component', () => {
        const productId = 'MLA798719279'
        mockedStore.dispatch = jest.fn()
        const component = <ProductDetailContainer store={mockedStore} />
        const wrapper = shallow(component).shallow()
        wrapper.props().onMount(productId)

        expect(detailsModule.fetchProductDetailsThunk).toHaveBeenCalledWith(mockedStore.dispatch, productId)
    })
})