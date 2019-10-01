import mockAxios from 'axios'
import { getSearchResult } from './search'
import searchResponse from '../../testingResources/searchResponse.json'
import mappedSearchProducts from '../../testingResources/mappedSearchProducts.json'

describe('Search Api tests', () => {
    beforeEach(() => {
        mockAxios.get.mockClear()
    })

    it('calls api of product details with correct uri', async () => {
        const productName = 'iphone nuevo'
        mockAxios.get.mockResolvedValue(searchResponse)

        await getSearchResult(productName)

        expect(mockAxios.get).toHaveBeenCalledWith('sites/MLA/search?q="iphone nuevo"')
    })

    it('returns correct response when calling api successfully', async () => {
        const productName = 'iphone nuevo'
        mockAxios.get.mockResolvedValueOnce(searchResponse)

        const searchProducts = await getSearchResult(productName)


        expect(searchProducts).toEqual(mappedSearchProducts)
    })

    it('returns promise rejected when there is an error', async () => {
        const productName = 'iphone nuevo'        
        const error = {
            response: {
                status: 500
            }
        }
        mockAxios.get.mockRejectedValue(error)
        const products = getSearchResult(productName)

        await expect(products).rejects.toBe(500)
    })
})