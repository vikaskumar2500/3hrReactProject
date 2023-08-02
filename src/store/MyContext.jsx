import React from "react";

const MyContext = React.createContext({
  TshirtList: [],
  addTshirtItem: () => {},
});

export default MyContext;
