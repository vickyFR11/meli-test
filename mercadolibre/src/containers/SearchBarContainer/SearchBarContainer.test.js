import React from 'react'
import { shallow } from 'enzyme'
import { mockedStore } from '../../config/testsConfiguration'
import SearchBarContainer from './SearchBarContainer'
import * as search from '../../modules/search/search'

jest.mock('../../modules/search/search')

describe('Search Bar Containes tests', () => {
    it('handles call to the module when onSubmit is triggered', () => {
        const component = <SearchBarContainer store={mockedStore}/>
        const wrapper = shallow(component).shallow()

        wrapper.props().onSubmit()

        expect(search.fetchProductsInformationThunk).toHaveBeenCalled()
    })
})