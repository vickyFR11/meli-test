import React from 'react'
import PropTypes from 'prop-types'
import Currency from 'react-currency-formatter'
import { shipping } from './assets'
import './ProductCard.scss'

class ProductCard extends React.Component {
    render() {
        const { image, price, title, currency, state, freeShipping } = this.props
        return (
            <div className='card'>
                <img alt='imagen' src={image}/>
                <div className='description'>
                    <div className='labels'>
                        <h4>
                            <Currency 
                                quantity={price}
                                currency={currency}
                            />
                            {freeShipping && <img alt='envio' className='shipping-logo' src={shipping}/>}
                        </h4>
                        <p>{title}</p>
                    </div>
                    <div className='state'>
                        <p>{state}</p>
                    </div>
                </div>
            </div>
        )
    }
}

ProductCard.propTypes = {
    image: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
    currency: PropTypes.string,
    state: PropTypes.string,
    freeShipping: PropTypes.bool
}

export default ProductCard