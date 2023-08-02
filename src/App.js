import "./App.css";
import React, {Fragment} from "react";
import AddTshirtForm from "./components/Form/AddTshirtForm";
import Header from "./components/Layout/Header";
import TshirtCollection from "./components/Layout/TshirtCollection";
import CartList from "./components/Cart/CartList";
const App = () => {
  return <Fragment>
    <Header/>
    <AddTshirtForm/>
    <TshirtCollection/>
    <CartList/>
  </Fragment>
};

export default App;
