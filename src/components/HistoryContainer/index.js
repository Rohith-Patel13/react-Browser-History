import {Component} from 'react'
import HistoryListItems from '../HistoryListItems/index'

import './index.css'

class HistoryContainer extends Component {
  constructor(props) {
    // The constructor method is a special method of a class for creating and initializing an object of that class.
    super(props)
    this.state = {
      // properties
      searchInput: '',
      updatedArrayResults: props.initialHistoryList,
    }
  }

  searchingInput = event => {
    // methods
    const val = event.target.value
    this.setState({searchInput: val})
  }

  deleteHistoryItem = idNum => {
    // methods
    const {updatedArrayResults} = this.state
    const afterDeleteArray = updatedArrayResults.filter(
      eachDeleteArray => eachDeleteArray.id !== idNum,
    )

    this.setState({updatedArrayResults: afterDeleteArray})
  }

  render() {
    // methods
    // const {initialHistoryList} = this.props
    const {searchInput, updatedArrayResults} = this.state
    console.log(updatedArrayResults)

    const searchRelatedArray = updatedArrayResults.filter(eachObjectFilter =>
      eachObjectFilter.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const renderAuth = () => {
      if (searchRelatedArray.length !== 0) {
        return (
          <ul className="ulContainer">
            {searchRelatedArray.map(eachObject => (
              <HistoryListItems
                eachObjectProp={eachObject}
                deleteHistoryItemProp={this.deleteHistoryItem}
                key={eachObject.id}
              />
            ))}
          </ul>
        )
      }
      return <p>There is no history to show</p>
    }

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

        <div className="lowerCardBg">{renderAuth()}</div>
      </div>
    )
  }
}

export default HistoryContainer
