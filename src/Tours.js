import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTours }) => {
  return (
    <section>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTours={removeTours}></Tour>;
      })}
    </section>
  );
};

export default Tours;
