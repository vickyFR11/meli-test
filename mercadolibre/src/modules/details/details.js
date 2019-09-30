import { getProductDetails } from '../../api/details/details'

export const initializer = {}

const INITIAL_STATE = {
    productDetails: {},
    errorMessage: ''
}

export const actions = {
    START_DETAILS: 'START_DETAILS_ACTION',
    FINISH_DETAILS: 'FINISH_DETAILS_ACTION',
    ERROR_DETAILS: 'ERROR_DETAILS_ACTION'
}

export const fetchProductDetailsThunk = (dispatch, productId) => {
    dispatch({ type: actions.START_DETAILS })
    function handleSuccessfulResponse(detailsResponse){
        dispatch({ type: actions.FINISH_DETAILS, productDetails: detailsResponse.item })
    }

    function handlesError(){

    }
    return getProductDetails(productId)
        .then(handleSuccessfulResponse)
        .catch(handlesError)
}

export const reducer = (state = INITIAL_STATE, action = {}) => {
    switch(action.type){
        case actions.START_DETAILS:
            return {
                ...state,
                errorMessage: null
            }
        case actions.FINISH_DETAILS:

            return {
                productDetails: action.productDetails,
                errorMessage: null
            }
        default:
            return {...state}
    }
}

export const getDetails = (state) => state.details.productDetails