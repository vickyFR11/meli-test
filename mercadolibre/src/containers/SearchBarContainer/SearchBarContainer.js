import { connect } from 'react-redux'
import * as search from '../../modules/search/search'
import SearchBar from '../../components/SearchBar/SearchBar'

const mapStateToProps = (state) => ({
    products: search.getSearchResults(state)
})

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (productName) => {
        search.fetchProductsInformationThunk(dispatch, productName)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
