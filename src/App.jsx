import Navbar from "./Navbar";
import Product from "./Product";
import Info from "./Info";
import Footer from "./Footer";
import MobileProduct from "./MobileProduct ";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function handleMinus() {
    if (count > 0) setCount((c) => c - 1);
  }
  function handlePlus() {
    setCount((c) => c + 1);
  }

  return (
    <div>
      <Navbar counter={count} />
      <MobileProduct />
      <div className="layout">
        <Product />
        <Info
          count={count}
          handleMinus={handleMinus}
          handlePlus={handlePlus}
          setCount={setCount}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
