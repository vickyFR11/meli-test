import React from 'react'
import { logo } from './assets'
import './SearchBar.scss'

const PLACEHOLDER_TEXT = 'Nunca dejes de buscar'

class SearchBar extends React.Component {
    render() {
        return (
            <div className='search-container'>
                <img alt='logo' src={logo}/>
                <input alt='buscador' type='text' placeholder={PLACEHOLDER_TEXT}/>
                <button />
            </div>
        )
    }
}

export default SearchBar