import {Component} from 'react'
import HistoryListItems from '../HistoryListItems/index'

import './index.css'

class HistoryContainer extends Component {
  state = {searchInput: ''}

  searchingInput = event => {
    const val = event.target.value
    this.setState({searchInput: val})
  }

  render() {
    const {initialHistoryList} = this.props
    const {searchInput} = this.state

    const searchRelatedArray = initialHistoryList.filter(eachObjectFilter =>
      eachObjectFilter.title.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bg">
        <div className="upperCardHead">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />

          <div className="searchContainer">
            <div className="searchIconContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </div>

            <div className="inputContainer">
              <input
                type="search"
                placeholder="Search history"
                className="inputStyle"
                value={searchInput}
                onChange={this.searchingInput}
              />
            </div>
          </div>
        </div>

        <div className="lowerCardBg">
          <ul className="ulContainer">
            {searchRelatedArray.map(eachObject => (
              <HistoryListItems
                eachObjectProp={eachObject}
                deleteHistoryItemProp={this.deleteHistoryItem}
                key={eachObject.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default HistoryContainer
