import Header from '../components/header';
import Menu from '../components/menu';
import SearchContent from '../components/searchContent';
import React from 'react';

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <Menu />
        <SearchContent />
      </div>
    </>
  );
}

export default App;
