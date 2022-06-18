import React from 'react';
import Romance from './components/Romance'
import Action from './components/Action'
import Comedy from './components/Comedy'
import LatestNews from './components/LatestNews';
function App() {
  return (
    <div className="App">
      <h1>Movie footer </h1>


      <Action />
      <Romance />
      <Comedy />
      <LatestNews />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
