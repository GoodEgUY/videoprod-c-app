import React, {Fragment} from "react";
import './App.css';

import Media from "react-media";
import Main from "./components/Main/Main";
import { useEffect, useState } from "react";
function App() {
 








  return (
    <>
    <div className="mainScreen">
      <div className="App">
        <Media queries={{
      small: "(max-width: 800px)",
      medium: "(min-width: 800px) and (max-width: 1400px)",
      large: "(min-width: 1400px)"
    }}>
      {matches => (
       <Fragment>
          {matches.small && <Main/>}
          {matches.medium && <Main/>}
          {matches.large && <Main/> }
       </Fragment>
      )}
    </Media>
      </div>
    </div>
    </>
  );
}

export default App;
