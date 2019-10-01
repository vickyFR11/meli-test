import mockAxios from 'axios'
import { getProductDetails } from './details'
import detailsResponse from '../../testingResources/detailResponse.json'
import descriptionResponse from '../../testingResources/descriptionResponse.json'

describe('Details Api tests', () => {
    beforeEach(() => {
        mockAxios.get.mockClear()
    })

    it('calls api of product details with correct uri', async () => {
        const productId = 'MLA798719279'
        mockAxios.get.mockResolvedValue(detailsResponse)

        await getProductDetails(productId)

        expect(mockAxios.get).toHaveBeenCalledWith('items/MLA798719279')
    })

    it('returns correct responses when calling api successfully', async () => {
        mockAxios.get.mockResolvedValueOnce(detailsResponse).mockResolvedValueOnce(descriptionResponse)

        const firstCall = await mockAxios.get()
        const secondCall = await mockAxios.get()

        expect(firstCall).toEqual(detailsResponse)
        expect(secondCall).toEqual(descriptionResponse)
    })

    it('returns promise rejected when there is an error', async () => {
        const productId = 'MLA798719279'
        const error = {
            response: {
                status: 500
            }
        }
        mockAxios.get.mockRejectedValue(error)

        const products = getProductDetails(productId)

        await expect(products).rejects.toBe(500)

    })
})