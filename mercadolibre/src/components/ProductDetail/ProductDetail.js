import React from 'react'
import PropTypes from 'prop-types'
import Currency from 'react-currency-formatter'
import './ProductDetail.scss'

const NEW = 'new'
const USED = 'used'

class ProductDetail extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params
        this.props.onMount(id)
    }

    translateCondition = (condition) => {
        switch (condition) {
            case NEW:
                return 'Nuevo'
            case USED:
                return 'Usado'
            default:
                return ''
        }
    }

    renderDetails = () => {
        const { picture, condition, sold_quantity, title, price, description } = this.props.productDetail

        return <div className='details-container'>
            <div className='wrapper'>
                <div className='item-preview'>
                    <div className='image'>
                        <img alt='imagen' src={picture} />
                    </div>
                    <div className='selling-wrapper'>
                        <p>{`${this.translateCondition(condition)} - ${sold_quantity} vendidos`}</p>
                        <p className='title'>{title}</p>
                        <h4 className='price'>
                            <Currency
                                quantity={price.amount}
                                currency={price.currency}
                            />
                        </h4>
                        <button className='buy-button'>Comprar</button>
                    </div>
                </div>
                <div className='description'>
                    <h4 className='description-title'>Descripción del producto</h4>
                    <p className='description-content'>{description}</p>
                </div>
            </div>
        </div>
    }

    isDetailsEmpty = () => {
        return Object.keys(this.props.productDetail).length === 0
    }

    render() {
        return (
            <>
                {!this.isDetailsEmpty() && this.renderDetails()}
            </>
        )
    }
}

ProductDetail.defaultProps = {
    productDetail: {}
}


ProductDetail.propTypes = {
    productDetail: PropTypes.object
}

export default ProductDetail