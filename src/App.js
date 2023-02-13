import React from 'react'
import './App.css';
import CurrencyRow from './Components/CurrencyRow';
import Footer from './Components/Footer';

const BASE_URL = 'https://api.exchangerate.host/latest'

export default function App() {
  
 /* List of states */
  const [currencyOptions, setCurrencyOptions] = React.useState([])
  const [fromCurrency, setFromCurrency] = React.useState()
  const [toCurrency, setToCurrency] = React.useState()
  const [exchangeRate, setExchangeRate] = React.useState()
  const [amount, setAmount] = React.useState(0)
  const [amountInFromCurrency, setAmountInFromCurrency] = React.useState(true)

  /* To calculate amount differences between currencies */
  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }
   
/* To get all currencies and set currencies upon rendering page */
  React.useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0]
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
        setExchangeRate(data.rates[firstCurrency])
      })
  }, [])

  /* To display currencies upon rendering page */
  React.useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[toCurrency]))
    }
  }, [fromCurrency, toCurrency])
    
  /* To set "From" currency */
  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }
  /* To set "To" currency */
  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }


  return (
    <div>
    <div className="container">
      <div>
      <h1 className="title">CONVERSOR</h1>
      <h2 className="description">The <span className="title-bold">most credible</span> currency convertor on the market.</h2>
      <div className="small-container">
        <h1 className="converter-title">Convert</h1>
        <CurrencyRow
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={e => setFromCurrency(e.target.value)}
          onChangeAmount={handleFromAmountChange}
              amount={fromAmount} />
            <div className='equals'>=</div>
        <CurrencyRow
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onChangeCurrency={e => setToCurrency(e.target.value)}
          onChangeAmount={handleToAmountChange}
          amount={toAmount} />
      </div>
        <h2>Questions?</h2>
          <a href="mailto:kevinjung13@gmail.com"><button type="button">Contact us!</button></a>
      </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

