import { getSearchResult } from '../../api/search/search'

export const initializer = () => {}

const INITIAL_STATE = {
    products: [],
    errorMessage: ''
}

export const actions = {
    START: 'START_ACTION',
    FINISH: 'FINISH_ACTION',
    ERROR: 'ERROR_ACTION'
}

export const fetchProductsInformationThunk = (dispatch, productName) => {
    dispatch({ type: actions.START })
    function handleSuccessfulResponse(searchResponse){
        dispatch({ type: actions.FINISH, products: searchResponse.items })
    }

    function handlesError(){
        dispatch({ type: actions.ERROR })
    }
    return getSearchResult(productName)
        .then(handleSuccessfulResponse)
        .catch(handlesError)
}

export const reducer = (state = INITIAL_STATE, action = {}) => {
    switch(action.type){
        case actions.START:
            return {
                ...state,
                errorMessage: null
            }
        case actions.FINISH:
            return {
                products: action.products,
                errorMessage: null
            }
        case actions.ERROR:
            return {
                errorMessage: 'An error occurred!'
            }
        default:
            return {...state}
    }
}

export const getSearchResults = (state) => state.search.products