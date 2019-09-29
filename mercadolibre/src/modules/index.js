import * as search from '../modules/search/search'

const initializers = {
    search: search.initializer
}

const reducers = {
    search: search.reducer
}

export default {
    initializers, reducers
}
