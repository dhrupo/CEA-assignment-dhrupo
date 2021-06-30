import React from 'react';

const SelectList = ({ setDataToSymbol }) => {
  return (
    <div className="p-4">
      <select onClick={(e) => setDataToSymbol(e.target.value)} className="form-select w-50 mx-auto mb-5">
        <option value="IBM">IBM</option>
        <option value="Aa">Aa</option>
        <option value="Ford">Ford</option>
        <option value="B">B</option>
        <option value="CELH">CELH</option>
        <option value="MAXR">MAXR</option>
        <option value="CD">CD</option>
        <option value="WDC">WDC</option>
        <option value="IMAB">IMAB</option>
        <option value="AAPL">AAPL</option>
        <option value="GOOGL">GOOGL</option>
      </select>
    </div>
  );
};

export default SelectList;