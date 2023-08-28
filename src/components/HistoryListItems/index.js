import './index.css'

const HistoryListItems = props => {
  const {eachObjectProp, deleteHistoryItemProp} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachObjectProp

  const clickedDeleteButton = () => {
    deleteHistoryItemProp(id)
  }

  return (
    <li className="listContainer">
      <div className="withoutDeleteContainer">
        <div className="timeContainer">
          <p className="timeText">{timeAccessed}</p>
        </div>

        <div className="mainContentContainer">
          <div>
            <img src={logoUrl} alt="domain logo" className="logoImg" />
          </div>

          <div className="nameAndUrlContainer">
            <p className="titleText textSpace">{title}</p>
            <p className="urlText textSpace">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        data-testid="delete"
        className="btnEl"
        onClick={clickedDeleteButton}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryListItems
