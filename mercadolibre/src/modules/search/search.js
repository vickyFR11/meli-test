import { getProductsList } from '../../api/search/search'

export const initializer = {}

const INITIAL_STATE = {}

export const actions = {
    START: 'START_ACTION',
    FINISH: 'FINISH_ACTION',
}

export const fetchProductsInformationThunk = (dispatch, productName) => {
    function handleSuccessfulResponse(){

    }

    function handlesError(){

    }
    return getProductsList(productName)
        .then(handleSuccessfulResponse())
        .catch(handlesError())
}

export const reducer = (state = INITIAL_STATE, action = {}) => {
    switch(action.type){
        case actions.START:
            return {}
        default:
            return {...state}
    }
}