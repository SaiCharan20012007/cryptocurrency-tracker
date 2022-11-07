// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {details} = props
  const {currencyName, usdValue, euroValue, id, currencyLogo} = details
  return (
    <li className="currency-item">
      <div className="list-a">
        <img src={currencyLogo} alt={currencyName} className="mini-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="sub2">
        <p className="attribute-2">{usdValue}</p>
        <p className="attribute-2">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
