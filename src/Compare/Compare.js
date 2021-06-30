import React, { useContext, useEffect, useState } from 'react';
import { ApiContext } from '../App';

const Compare = () => {
  const [stockData, setStockData] = useContext(ApiContext);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const name = stockData && stockData["Meta Data"]["2. Symbol"];
    const myData = stockData && Object.entries(stockData)[1][1];
    const dt = myData && Object.values(myData)[0];

    const obj = {
      "symbol": name,
      "date": dt && Object.keys(myData)[0],
      "open": dt && dt["1. open"],
      "low": dt && dt["3. low"],
      "high": dt && dt["2. high"]
    }
    setTableData(prev => [...prev, obj]);
  }, [stockData])

  return (
    <div className="container text-center">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Symbol</th>
            <th scope="col">Date</th>
            <th scope="col">Open</th>
            <th scope="col">Low</th>
            <th scope="col">High</th>
          </tr>
        </thead>
        <tbody>
          {
            tableData.map((dt, index) => (
              <tr key={index}>
                <td>{dt.symbol}</td>
                <td>{dt.date}</td>
                <td>{dt.open}</td>
                <td>{dt.low}</td>
                <td>{dt.high}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Compare;