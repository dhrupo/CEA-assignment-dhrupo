import React from 'react';

const Navbar = () => {
  return (
    <ul className="nav p-3" style={{
      backgroundColor: "#d2ebfc"
    }}>
      <li className="nav-item active">
        <a className="nav-link" href="/home">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/compare">Compare</a>
      </li>
    </ul  >
  );
};

export default Navbar;