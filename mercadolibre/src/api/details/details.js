import { axiosInstance } from '../../api'

const productDetailsMapper = async (response) => {
    const item = {
        price: {}
    }
    item.id = response.id
    item.title = response.title
    item.price.currency = response.currency_id
    item.price.amount = response.price
    item.price.decimals = 0
    item.picture = response.pictures[0].url
    item.condition = response.condition
    item.free_shipping = response.shipping.free_shipping
    item.sold_quantity = response.sold_quantity
    item.description = await getProductDescription(response.id)

    return item
}

const handleResponse = async (response) => {
    const { data } = response
    const detailsResponse = {
        author: {
            name: 'Victoria',
            lastname: 'Fuenmayor'
        },
    }
    detailsResponse.item = await productDetailsMapper(data)
    return detailsResponse  
}

const handleError = (error) => {

}

const getProductDescription = async (productId) => {
    const searchQuery = `items/${productId}/description`
    return axiosInstance.get(searchQuery)
        .then(response => { 
            const { data } = response
            return data.plain_text
        })
        .catch(error => handleError(error))
}

export const getProductDetails = (productId) => {
    const searchQuery = `items/${productId}`
    return axiosInstance.get(searchQuery)
        .then(response => handleResponse(response))
        .catch(error => handleError(error))
}