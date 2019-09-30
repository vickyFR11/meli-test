import React from 'react'
import SearchBarContainer from '../../containers/SearchBarContainer/SearchBarContainer'
import './Home.scss'

class Home extends React.Component {
    render() {
        return (
            <div>
                <SearchBarContainer testID='searchBarContainer' />
            </div>
        )
    }
}

export default Home