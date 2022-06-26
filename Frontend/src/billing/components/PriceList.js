import React from "react";
import PriceItem from "./PriceItem";

const PriceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="text-justify">
          <h3>No Treatments found</h3>
      </div>
    );
  }

  return (
    <>
      <tbody>
        {props.items.map((Price) => (
          <PriceItem
            key={Price.id}
            id={Price.id}
            price={Price.price}
            treatmentName={Price.treatmentName}
            onDelete={props.onDeletePrice}
          />
        ))}
      </tbody>
    </>
  );
};

export default PriceList;
