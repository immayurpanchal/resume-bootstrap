import React from "react";

const Degree = () => (
  <div className="form-group">
    <input
      type="textbox"
      name="name"
      placeholder="Degree Name"
      className="form-control mt-2"
    />
    <input
      type="textbox"
      name="email"
      placeholder="Institute / University"
      className="form-control mt-2"
    />
    <input
      type="textbox"
      name="dateOfBirth"
      placeholder="Year"
      className="form-control mt-2"
    />
    <input
      type="textbox"
      name="address"
      placeholder="CPI / Aggregate"
      className="form-control mt-2"
    />
  </div>
);

export default Degree;
