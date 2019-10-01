import * as module from './search'
import { getSearchResult } from '../../api/search/search'
import searchResponse from '../../testingResources/searchResponse.json'
import mappedSearchProducts from '../../testingResources/mappedSearchProducts.json'

jest.mock('../../api/search/search')

describe('Module Search tests', () => {
    describe('Initializers tests', () => {
        it('returns initial state', () => {
            const initialize = module.initializer()
            expect(initialize).toEqual(undefined)
        })
    })
    describe('Thunk tests', () => {
        beforeEach(() => {
            getSearchResult.mockClear()
        })

        it('returns search results when response is successfull', async () => {
            const productName = 'iphone nuevo'
            const mockedDispatch = jest.fn()
            getSearchResult.mockResolvedValue(mappedSearchProducts)

            await module.fetchProductsInformationThunk(mockedDispatch, productName)

            expect(getSearchResult).toHaveBeenCalled()
            expect(mockedDispatch.mock.calls[0][0].type).toEqual(module.actions.START)
            expect(mockedDispatch.mock.calls[1][0].type).toEqual(module.actions.FINISH)
            expect(mockedDispatch.mock.calls[1][0].products).toEqual(mappedSearchProducts.items)
        })

        it('returns error when response is unsuccessfull', async () => {
            const productName = 'iphone nuevo'            
            const mockedDispatch = jest.fn()
            getSearchResult.mockRejectedValue()

            await module.fetchProductsInformationThunk(mockedDispatch, productName)

            expect(getSearchResult).toHaveBeenCalled()
            expect(mockedDispatch.mock.calls[0][0].type).toEqual(module.actions.START)
            expect(mockedDispatch.mock.calls[1][0].type).toEqual(module.actions.ERROR)
        })

    })
    describe('Reducer tests', () => {
        it('returns initial state and error message null on START action', () => {
            const action = { type: module.actions.START }
            const initialState = {
                productDetails: {},
                errorMessage: ''
            }
            
            const { productDetails, errorMessage } = module.reducer(initialState, action)
            
            expect(productDetails).toEqual({})
            expect(errorMessage).toBe(null)
        })

        it('returns products and error message null on FINISH action', () => {
            const action = { type: module.actions.FINISH, products: mappedSearchProducts.items }
            const initialState = {}
            
            const { products, errorMessage } = module.reducer(initialState, action)
            
            expect(products).toEqual(mappedSearchProducts.items)
            expect(errorMessage).toBe(null)
        })

        it('returns an error message on ERROR action', () => {
            const action = { type: module.actions.ERROR }
            const initialState = {}
            
            const { errorMessage } = module.reducer(initialState, action)
            
            expect(errorMessage).toBe('An error occurred!')
        })
    })
    describe('Selector tests', () => {
        it('returns products from state', () => {
            const state = { search: { products: mappedSearchProducts.items }}
            
            const products = module.getSearchResults(state)
            expect(products).toEqual(mappedSearchProducts.items)
        })
    })
})