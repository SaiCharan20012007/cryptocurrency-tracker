// Write your JS code here
import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

const CryptocurrencyList = props => {
  const {list} = props
  return (
    <div className="unorderd-list-container">
      <h1 className="app-title">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
      />
      <ul className="currencies-items-container">
        <li className="columns-section">
          <h1 className="attribute-1">CoinType</h1>
          <div className="sub">
            <h1 className="attribute-1">USD</h1>
            <h1 className="attribute-1">EURO</h1>
          </div>
        </li>
        {list.map(each => (
          <CryptocurrencyItem key={each.id} details={each} />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrencyList
