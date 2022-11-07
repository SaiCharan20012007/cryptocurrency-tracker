// Write your code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {currenciesList: [], isLoading: true}

  componentDidMount() {
    this.getCurrencyData()
  }

  getCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedList = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({currenciesList: updatedList, isLoading: false})
  }

  render() {
    const {currenciesList, isLoading} = this.state

    const content = isLoading ? (
      <div testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <CryptocurrencyList list={currenciesList} />
    )
    return <div className="bg-container">{content}</div>
  }
}

export default CryptocurrencyTracker
