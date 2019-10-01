import * as module from './details'
import { getProductDetails } from '../../api/details/details'

jest.mock('../../api/details/details')

const mappedProductDetails = {
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

describe('Module Details tests', () => {
    describe('Initializers tests', () => {
        it('returns initial state', () => {
            const initialize = module.initializer()
            expect(initialize).toEqual(undefined)
        })
    })
    describe('Thunk tests', () => {
        beforeEach(() => {
            getProductDetails.mockClear()
        })

        it('returns product details when response is successfull', async () => {
            const productId = 'MLA798719279'
            const mockedDispatch = jest.fn()
            getProductDetails.mockResolvedValue(mappedProductDetails)

            await module.fetchProductDetailsThunk(mockedDispatch, productId)

            expect(getProductDetails).toHaveBeenCalled()
            expect(mockedDispatch.mock.calls[0][0].type).toEqual(module.actions.START_DETAILS)
            expect(mockedDispatch.mock.calls[1][0].type).toEqual(module.actions.FINISH_DETAILS)
            expect(mockedDispatch.mock.calls[1][0].productDetails).toEqual(mappedProductDetails.item)
        })

        it('returns error when response is unsuccessfull', async () => {
            const productId = 'MLA798719279'
            const mockedDispatch = jest.fn()
            getProductDetails.mockRejectedValue()

            await module.fetchProductDetailsThunk(mockedDispatch, productId)

            expect(getProductDetails).toHaveBeenCalled()
            expect(mockedDispatch.mock.calls[0][0].type).toEqual(module.actions.START_DETAILS)
            expect(mockedDispatch.mock.calls[1][0].type).toEqual(module.actions.ERROR_DETAILS)
        })

    })
    describe('Reducer tests', () => {
        it('returns initial state and error message null on START_DETAILS action', () => {
            const action = { type: module.actions.START_DETAILS }
            const initialState = {
                productDetails: {},
                errorMessage: ''
            }
            
            const { productDetails, errorMessage } = module.reducer(initialState, action)
            
            expect(productDetails).toEqual({})
            expect(errorMessage).toBe(null)
        })

        it('returns product details and error message null on FINISH_DETAILS action', () => {
            const action = { type: module.actions.FINISH_DETAILS, productDetails: mappedProductDetails.item }
            const initialState = {}
            
            const { productDetails, errorMessage } = module.reducer(initialState, action)
            
            expect(productDetails).toEqual(mappedProductDetails.item)
            expect(errorMessage).toBe(null)
        })

        it('returns an error message on ERROR_DETAILS action', () => {
            const action = { type: module.actions.ERROR_DETAILS }
            const initialState = {}
            
            const { errorMessage } = module.reducer(initialState, action)
            
            expect(errorMessage).toBe('An error occurred!')
        })
    })
    describe('Selector tests', () => {
        it('returns details from state', () => {
            const state = { details: { productDetails: mappedProductDetails.item }}
            
            const details = module.getDetails(state)
            expect(details).toEqual(mappedProductDetails.item)
        })
    })
})