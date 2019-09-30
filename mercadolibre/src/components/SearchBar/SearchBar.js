import React from 'react'
import PropTypes from 'prop-types'
import { logo } from './assets'
import './SearchBar.scss'
import List from '../List/List';

const PLACEHOLDER_TEXT = 'Nunca dejes de buscar'

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            productName: ''
        }
    }

    searchItems = () => {
        const { onSubmit } = this.props
        const { productName } = this.state
        onSubmit(productName)
    }

    handleChanges = (event) => {
        this.setState({productName: event.target.value})
    }

    render() {
        const { products } = this.props
        return (
            <>
                <div className='search-container'>
                    <img alt='logo' src={logo} />
                    <input alt='buscador' type='text' value={this.state.value} placeholder={PLACEHOLDER_TEXT} onChange={this.handleChanges}/>
                    <button onClick={() => this.searchItems()} />
                </div>
                {products.length > 0 && <List items={products}/>}
            </>
        )
    }
}

SearchBar.propTypes = {
    products: PropTypes.array,
    onSubmit: PropTypes.func
}

export default SearchBar