import * as search from '../modules/search/search'
import * as details from '../modules/details/details'

const initializers = {
    search: search.initializer,
    details: details.initializer
}

const reducers = {
    search: search.reducer,
    details: details.reducer
}

export default {
    initializers, reducers
}
