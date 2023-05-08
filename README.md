# convert-currency
# Currency Exchange and Conversion App

This is a simple React app that allows you to get exchange rates between two currencies and convert an amount from one currency to another.

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher) or yarn (v1 or higher)

### Installing

1. Clone the repository:

  git clone https://github.com/newtonmahata45/convert-currency.git
2. Install dependencies:

cd currency-exchange-app
npm install
3. Start the development server:
npm start

This will start the development server at [http://localhost:3000](http://localhost:3000).

### Usage

#### Exchange Rates

1. Enter the currency code of the currency you want to convert from in the "From Currency" field (e.g. USD).

2. Enter the currency code of the currency you want to convert to in the "To Currency" field (e.g. EUR).

3. Click the "Get Exchange Rate" button to get the exchange rate.

This will display the exchange rate and the source of the rate in a table.

#### Currency Conversion

1. Enter the currency code of the currency you want to convert from in the "From Currency" field (e.g. USD).

2. Enter the currency code of the currency you want to convert to in the "To Currency" field (e.g. EUR).

3. Enter the amount you want to convert in the "Amount" field.

4. Click the "Convert Amount" button to get the converted amount.

This will display the converted amount, as well as the maximum and minimum values for the currency pair over the last 30 days.

## Built With

- React
- Axios
