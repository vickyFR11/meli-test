import React from 'react'
import { logo } from './assets'
import './SearchBar.scss'

class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <img alt='logo' src={logo}/>
            </div>
        )
    }
}

export default SearchBar