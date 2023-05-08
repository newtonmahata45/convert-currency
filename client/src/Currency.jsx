import React, { useState } from "react";
import axios from "axios";
function Currency() {
  const [exchange, setExchange] = useState({ from: "", to: "" });
  const [convert, setConvert] = useState({ from: "", to: "", amount:1});
  const [exchangeResult, setExchangeResult] = useState([]);
  const [convertResult, setConvertResult] = useState({});
  async function handleExchange(e) {
    e.preventDefault();
    const { from, to } = exchange;
    try {
      const res = await axios.get(
        `https://convert-currency-dusky.vercel.app/currency-exchange?from=${from}&to=${to}`
        // `http://localhost:3001/currency-exchange?from=${from}&to=${to}`
      );
      console.log("resp=>", res.data);
      setExchangeResult(res.data.result);
    } catch (err) {
      console.log("the error =>", err.response.data.message);
      setExchangeResult([])
      window.alert("Something is wrong");
    }
  }
  const handleConvert = async (e) => {
    e.preventDefault();
    const { from, to, amount } = convert;
    try {
        const res = await axios.get(`https://convert-currency-dusky.vercel.app/convert?from=${from}&to=${to}&amount=${amount}`)
        console.log(res.data)
        setConvertResult(res.data)
    } catch (error) {
    //  console.log("the convert error =>", error.response.data.message);
      setConvertResult({})
      window.alert("Something is wrong");
    }
  };
  function handle(e) {
    const newChange = { ...exchange };
    newChange[e.target.id] = e.target.value;
    setExchange(newChange);
    // console.log(newChange);
  }
  function handle2(e) {
    const newChange = { ...convert };
    if(e.target.id =='fromCurrency')newChange["from"] = e.target.value;
    else if(e.target.id=='toCurrency')newChange["to"] = e.target.value;
    else if(e.target.id=='amount')newChange["amount"] = e.target.value;
    setConvert(newChange);
    // console.log(newChange);
  }
  return (
    <div>
      <h1>Exchange Currency</h1>
      <form onSubmit={handleExchange}>
        <div className="formone">
          <label htmlFor="fromCurrency">From Currency</label>
          <input
            type="text"
            className="form-control"
            id="from"
            value={exchange.from.toUpperCase()}
            onChange={(e) => handle(e)}
            required
          />
        </div>
        <div className="formtwo">
          <label htmlFor="toCurrency">To Currency</label>
          <input
            type="text"
            className="form-control"
            id="to"
            value={exchange.to.toUpperCase()}
            onChange={(e) => handle(e)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Get Exchange Rate
        </button>
      </form>
      <div>
      <table className="table">
      <thead>
            <tr className="thead" >
              <th>Exchange Rate</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
      {exchangeResult.map((e) => {
        return (
          <tr key={e.id} >
            <td className="exchange-rate">  {e.exchange_rate}</td>
            <td className="source"> {e.source}</td>
          </tr>
        );
      })}
      </tbody>
      </table>
      </div>
      <h1>Convert Currency</h1>
      <form onSubmit={handleConvert}>
        <div className="formfrom">
          <label htmlFor="fromCurrency">From Currency</label>
          <input
            type="text"
            className="form-control"
            id="fromCurrency"
            value={convert.from.toUpperCase()}
            onChange={(e) => handle2(e)}
            required
          />
        </div>
        <div className="formto">
          <label htmlFor="toCurrency">To Currency</label>
          <input
            type="text"
            className="form-control"
            id="toCurrency"
            value={convert.to.toUpperCase()}
            onChange={(e) => handle2(e)}
            required
          />
        </div>
        <div className="formamount">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            value={convert.amount}
            onChange={(e) => handle2(e)}
            required
          />
        </div>
        <button type="submit" className="btn btn-two">
          Convert Amount
        </button>
      </form>
      <div className="amount-result">
      {convertResult.max_value && <p className="max"> Maximum Value: {convertResult.max_value}</p>}
      {convertResult.min_value && <p className="min"> Minimum Value: {convertResult.min_value}</p>}
      </div>
    </div>
  );
}

export default Currency;
