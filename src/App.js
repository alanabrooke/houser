import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";

import Header from './Components/Header/Header'
import routes from "./routes";


function App() {
  console.log(routes)
  return (
    <div className='all'>
    <HashRouter>
        <Header />
       {routes}
    </HashRouter>
    </div>
  );
}
export default App;