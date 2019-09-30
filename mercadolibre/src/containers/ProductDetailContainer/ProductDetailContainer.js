import { connect } from 'react-redux'
import * as details from '../../modules/details/details'
import ProductDetail from '../../components/ProductDetail/ProductDetail'

const mapStateToProps = (state) => ({
    productDetail: details.getDetails(state)
})

const mapDispatchToProps = (dispatch) => ({
    onMount: (productId) => {
        details.fetchProductDetailsThunk(dispatch, productId)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
