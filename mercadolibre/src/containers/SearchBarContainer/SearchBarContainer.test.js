import React from 'react'
import { shallow } from 'enzyme'
import { mockedStore } from '../../config/testsConfiguration'
import SearchBarContainer from './SearchBarContainer'
import * as search from '../../modules/search/search'
import mappedSearchProducts from '../../testingResources/mappedSearchProducts.json'

jest.mock('../../modules/search/search')

const { items } = mappedSearchProducts

describe('Search Bar Containes tests', () => {
    beforeEach(() => {
        search.getSearchResults.mockReturnValue(items)
    })

    it('product details is passed as a prop', () => {
        const component = <SearchBarContainer store={mockedStore} />
        const wrapper = shallow(component).shallow()
        const searchResultProp = wrapper.props().products

        expect(searchResultProp).toEqual(items)
    })

    it('handles call to the module when onSubmit is triggered', () => {
        const component = <SearchBarContainer store={mockedStore}/>
        const wrapper = shallow(component).shallow()

        wrapper.props().onSubmit()

        expect(search.fetchProductsInformationThunk).toHaveBeenCalled()
    })
})