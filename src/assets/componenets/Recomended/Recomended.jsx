import React from "react";
import "./Recomended.css";
import Button from "../Buttons";
const Recomended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
          <Button
            onClickHandler={handleClick}
            value="Addidas"
            title="Addidas"
          />
        </div>
      </div>
    </>
  );
};

export default Recomended;
