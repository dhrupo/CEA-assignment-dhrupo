import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const StockGraph = ({ symbol, stockData }) => {
  const data = [];
  let ohlc = [];
  let volume = [];
  let options = {};

  const chart = () => {
    const myData = stockData && Object.entries(stockData)[1][1];
    for (let key in myData) {
      data.push([Date.parse(key), parseFloat(myData[key]["1. open"]), parseFloat(myData[key]["2. high"]), parseFloat(myData[key]["3. low"]), parseFloat(myData[key]["4. close"]), parseFloat(myData[key]["5. volume"])]);
    }
    let dataLength = data.length, i = 0;
    for (i; i < dataLength; i += 1) {
      ohlc.push([
        data[i][0], // the date
        data[i][1], // open
        data[i][2], // high
        data[i][3], // low
        data[i][4] // close
      ]);

      volume.push([
        data[i][0], // the date
        data[i][5] // the volume
      ]);
    }
    options = {
      rangeSelector: {
        enabled: false
      },

      title: {
        text: symbol
      },

      yAxis: [{
        height: '60%',
        lineWidth: 2,
        resize: {
          enabled: true
        }
      }, {
        top: '80%',
        height: '30%',
        lineWidth: 2,
        offset: 0
      }],
      navigator: {
        enabled: false
      },
      srcollbar: {
        enabled: false
      },
      series: [{
        type: 'ohlc',
        name: `${symbol} Stock Price`,
        data: ohlc
      }, {
        type: 'column',
        data: volume,
        yAxis: 1
      }],
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              enabled: false
            }
          }
        }]
      }
    };
  }
  chart();

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"stockChart"}
      options={options}
    />
  );
};

export default StockGraph;