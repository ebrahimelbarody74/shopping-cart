import { useEffect, useState } from "react";
import "./App.css";
import Fliter from "./components/Fliter/Fliter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import data from "./data.json";
import Cart from "./components/Cart/Cart";
// import store from "./store/store";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  const [products, setProducts] = useState(data);
  const [size, setSize] = useState();
  const [order, setOrder] = useState();

  //add product
  const [add, setAdd] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  useEffect(() => {
    setAdd(JSON.parse(localStorage.getItem("cartItems")) || []);
  }, [add]);
  // useEffect(() => {
  //   setAdd(JSON.parse(localStorage.getItem("cartItems")));
  // }, [add]);

  // const addProduct = (cart) => {
  //   const cartItems = [...add];
  //   let isProductExist = false;
  //   cartItems.forEach((p) => {
  //     if (p.id == cart.id) {
  //       p.Qty++;
  //       isProductExist = true;
  //     }
  //   });
  //   if (!isProductExist) {
  //     cartItems.push({ ...cart, Qty: 1 });
  //   }
  //   setAdd(cartItems);
  // };
  // console.log(add);
  // ================

  // remove

  // const removeProduct = (product) => {
  //   setAdd(add.filter((e) => e.id != product.id));
  // };
  //////////////////////////

  // let price = add.reduce((e, a) => {
  //   return e + a.price * +a.Qty;
  // }, 0);
  // console.log(price);

  // useEffect(() => {
  //   localStorage.setItem("add", JSON.stringify(add));
  // }, [add]);

  //size

  // const handelSize = (e) => {
  //   setProducts(data);
  //   setSize(e.target.value);
  //   if (e.target.value === "All") {
  //     setProducts(data);
  //   } else {
  //     let productClone = [...data];
  //     let newProduct = productClone.filter(
  //       (p) => p.sizes.indexOf(e.target.value) != -1
  //     );
  //     setProducts(newProduct);
  //   }
  // };

  //price
  // const handelOrder = (e) => {
  //   setOrder(e.target.value);
  //   let productClone = [...products];
  //   let newProduct = productClone.sort((a, b) => {
  //     if (e.target.value == "Lowest") {
  //       return a.price - b.price;
  //     } else if (e.target.value == "highest") {
  //       return b.price - a.price;
  //     } else {
  //       return a.id < b.id ? 1 : -1;
  //     }
  //   });
  //   setProducts(newProduct);
  // };

  return (
    <Provider store={store}>
      <div className="layout">
        <Header></Header>
        <main>
          <div className="wrapper">
            <Products products={products}></Products>
            <Fliter
              // handelSize={handelSize}
              // handelOrder={handelOrder}
              size={size}
              order={order}
            ></Fliter>
          </div>
          <Cart
            add={add}
            // price={price} removeProduct={removeProduct}
          ></Cart>
        </main>
        <Footer></Footer>
      </div>
    </Provider>
  );
}

export default App;
