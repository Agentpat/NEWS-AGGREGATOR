// CurrencyConverter.js

import React, { useState } from 'react';
import './CurrencyConverter.css';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(null);

  const handleConvert = () => {
    // Implement conversion logic here
    // For simplicity, let's assume a 1:1 conversion for demonstration purposes
    const converted = amount ? parseFloat(amount) : 0;
    setConvertedAmount(converted);
  };

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>
      <div className="input-container">
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          {/* Add more currency options as needed */}
        </select>
      </div>
      <div className="arrow">&#8644;</div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Converted amount"
          value={convertedAmount || ''}
          readOnly
        />
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          {/* Add more currency options as needed */}
        </select>
      </div>
      <button onClick={handleConvert}>Convert</button>
    </div>
  );
};

export default CurrencyConverter;
