// SmartWidget.js

import React from 'react';
import WeatherWidget from '../weather-widget/WeatherWidget';
import CurrencyConverter from '../currency-exchange-rates-widgets/CurrencyConverter';
import './SmartWidget.css';


const SmartWidget = () => {
  return (
    <div className="smart-widget">
      <div className="widget-container">
        <CurrencyConverter />
      </div>
      <div className="widget-container">
        <WeatherWidget />
      </div>
     
    </div>
  );
};

export default SmartWidget;
