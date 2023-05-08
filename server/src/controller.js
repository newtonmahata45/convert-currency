const axios = require("axios");

async function exchangeCurrency(req, res) {
  const { from, to } = req.query;
  try {
    let result1 = await axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from.toLowerCase()}/${to.toLowerCase()}.json`
    );
    let result2 = await axios.get(
      `https://open.er-api.com/v6/latest/${from.toUpperCase()}`
    );
    let result3 = await axios.get(
        `https://api.frankfurter.app/latest?amount=1&from=${from.toUpperCase()}&to=${to.toUpperCase()}`
      );
  
    // console.log("result 1=>", result1.data[`${to.toLowerCase()}`]);
    // console.log("result 2 =>", result2.data.rates[`${to.toUpperCase()}`]);
    // console.log("result 2 =>", result3.data.rates[`${to.toUpperCase()}`]);
    let ansArr = [
        {
            exchange_rate: result1.data[`${to.toLowerCase()}`],
            source: "https://cdn.jsdelivr.net",
        },
        {
            exchange_rate: result2.data.rates[`${to.toUpperCase()}`],
            source: "http://www.exchangerate.com/",
        },
        {
            exchange_rate: result3.data.rates[`${to.toUpperCase()}`],
            source: "https://www.x-rates.com"
        }
    ];
    console.log(ansArr);
    return res.status(200).send({ result: ansArr, status: true });
  } catch (error) {
    console.log("err=>", error.data);
    return res.status(500).send({ status: false, message: error.message });
  }
}

async function convert(req, res) {
  const { from, to, amount } = req.query;
  try {
    let result1 = await axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from.toLowerCase()}/${to.toLowerCase()}.json`
    );
    let result2 = await axios.get(
      `https://open.er-api.com/v6/latest/${from.toUpperCase()}`
    );
    let result3 = await axios.get(
      `https://api.frankfurter.app/latest?amount=1&from=${from.toUpperCase()}&to=${to.toUpperCase()}`
    );

    // console.log("result1=>", result1.data[`${to.toLowerCase()}`]);
    // console.log("result2=>", result2.data.rates[`${to.toUpperCase()}`]);
    // console.log("result3=>", result3.data.rates[`${to.toUpperCase()}`])
    let ansArr = [
      result1.data[`${to.toLowerCase()}`],
      result2.data.rates[`${to.toUpperCase()}`],
      result3.data.rates[`${to.toUpperCase()}`],
    ];
    return res
      .status(200)
      .send({
        status: true,
        max_value: Math.max(...ansArr) * amount,
        min_value: Math.min(...ansArr) * amount,
      });
  } catch (error) {
    console.log("error=>",error);
    return res.status(500).send({ status: false, message: error.message });
  }
}

module.exports = { exchangeCurrency, convert };
