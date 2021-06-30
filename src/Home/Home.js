import React, { useContext } from 'react';
import { ApiContext, SymbolContext } from '../App';
import Spinner from '../Spinner/Spinner';
import StockGraph from './StockGraph/StockGraph';

const Home = () => {
  const [stockData, setStockData] = useContext(ApiContext);
  const [symbol, setSymbol] = useContext(SymbolContext);

  return (
    <div className="container text-center">
      {stockData ?
        <StockGraph symbol={symbol} stockData={stockData}></StockGraph>
        : <Spinner></Spinner>}
    </div>
  );
};

export default Home;