import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Compare from './Compare/Compare';
import SelectList from './SelectList/SelectList';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ibmStock from './fakeData/ibmStock.json';

export const ApiContext = createContext();
export const SymbolContext = createContext();

function App() {
  const [symbol, setSymbol] = useState("");
  const [stockData, setStockData] = useState(null);

  const setDataToSymbol = (value) => {
    setSymbol(value);
  }

  useEffect(() => {
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=60min&apikey=G13VIK4ZW3O735HO`)
      .then(res => res.json())
      .then(apiData => {
        if (apiData.hasOwnProperty("Note") || apiData.hasOwnProperty("Error Message") || apiData.hasOwnProperty("Information")) {
          // setStockData(ibmStock);
          alert("Api Data Hit Boundary... Need to wait for 1 minute and try again.");
          return;
        }
        else {
          setStockData(apiData);
        }
      })
  }, [symbol])

  return (
    <SymbolContext.Provider value={[symbol, setSymbol]}>
      <ApiContext.Provider value={[stockData, setStockData]}>
        <Router>
          <Navbar></Navbar>
          <SelectList setDataToSymbol={setDataToSymbol}></SelectList>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/compare">
              <Compare></Compare>
            </Route>
          </Switch>
        </Router>
      </ApiContext.Provider>
    </SymbolContext.Provider>
  );
}

export default App;
