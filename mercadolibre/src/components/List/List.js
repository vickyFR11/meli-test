import React from 'react'
import PropTypes from 'prop-types'
import './List.scss'
import ProductCard from '../ProductCard/ProductCard';

class List extends React.Component {
    renderCards = () => {
        const { items } = this.props
        return items.map(item => {
            return <ProductCard 
                key={item.id}
                id={item.id}
                image={item.picture}
                price={item.price.amount}
                title={item.title}
                currency={item.price.currency}
                state={item.state}
                freeShipping={item.free_shipping}
            />
        })
    }

    render() {
        return (
            <div className='list-container'>
                <div className='cards-wrapper'>
                    {this.renderCards()}
                </div>
            </div>
        )
    }
}

List.propTypes = {
    items: PropTypes.array
}

export default List