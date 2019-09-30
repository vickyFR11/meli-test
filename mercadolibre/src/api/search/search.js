import { axiosInstance } from '../../api'

const productItemsMapper = (response) => {
    const items = []
    const apiResponse = response.results.slice(0,4)
    apiResponse.forEach(item => {
        let product = {
            id: '',
            title: '',
            price: {
                currency: '',
                amount: 0,
                decimals: 0
            },
            picture: '',
            condition: '',
            free_shipping: false,
            state: ''
        }

        product.id = item.id
        product.title = item.title
        product.price.currency = item.currency_id
        product.price.amount = item.price
        product.picture = item.thumbnail
        product.condition = item.condition
        product.free_shipping = item.shipping.free_shipping
        product.state = item.address.state_name

        items.push(product)
    })

    return items
}

const handleResponse = (response) => {
    const { data } = response
    const searchRespose = {
        author: {
            name: 'Victoria',
            lastname: 'Fuenmayor'
        },
    }

    searchRespose.items = productItemsMapper(data)
    return searchRespose  
}

const handleError = (error) => {

}

export const getSearchResult = (productName) => {
    const searchQuery = `sites/MLA/search?q="${productName}"`
    return axiosInstance.get(searchQuery)
        .then(response => handleResponse(response))
        .catch(error => handleError(error))
}