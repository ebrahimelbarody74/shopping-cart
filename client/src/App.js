import { useState } from "react";
import "./App.css";
import Fliter from "./components/Fliter/Fliter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import data from "./data.json";

function App() {
  const [products,setProducts] = useState(data)
  return (
    <div className="layout">
      <Header></Header>
      <main>
        <div className="wrapper">
          <Products products={products}></Products>
          <Fliter></Fliter>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
