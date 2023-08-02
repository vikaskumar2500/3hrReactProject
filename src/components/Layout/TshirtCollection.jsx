import "./TshirtCollection.css";
import React, { useContext } from "react";
import MyContext from "../../store/MyContext";
import TshirtItem from "./TshirtItem";

const TshirtCollection = () => {
  const myCtx = useContext(MyContext);

  return (
    <ul className="tshirt-collection">
      {myCtx.TshirtList.map((item) => (
        <TshirtItem {...item} />
      ))}
    </ul>
  );
};

export default TshirtCollection;
