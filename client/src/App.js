import { useState } from "react";
import "./App.css";
import Fliter from "./components/Fliter/Fliter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import data from "./data.json";

function App() {
  const [products, setProducts] = useState(data);
  const [size, setSize] = useState();
  const [order, setOrder] = useState();

  const handelSize = (e) => {
    setProducts(data);
    setSize(e.target.value);
    if (e.target.value === "All") {
      setProducts(data);
    } else {
      let productClone = [...data];
      let newProduct = productClone.filter(
        (p) => p.sizes.indexOf(e.target.value) != -1
      );
      setProducts(newProduct);
    }
  };
  const handelOrder = (e) => {
    setOrder(e.target.value);
    let productClone = [...products];
    let newProduct = productClone.sort((a, b) => {
      if (e.target.value == "Lowest") {
        return a.price - b.price;
      } else if (e.target.value == "highest") {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });
    setProducts(newProduct);
  };
  return (
    <div className="layout">
      <Header></Header>
      <main>
        <div className="wrapper">
          <Products products={products}></Products>
          <Fliter
            handelSize={handelSize}
            handelOrder={handelOrder}
            size={size}
            order={order}
          ></Fliter>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
