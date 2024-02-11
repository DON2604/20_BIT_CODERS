//import { Stocks } from "./components/Stocks";

import Home from "./components/Home";
import {  BrowserRouter , Routes, Route } from 'react-router-dom';
import Stocks from "./components/Stocks";


const App = () => {

    return (
        <>
     
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/stocks" element={<Stocks />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          <Route exact path="/stocks" element= {<Stocks />} />
        </Routes>
        </BrowserRouter>
      
        </>
    );
};

export default App;