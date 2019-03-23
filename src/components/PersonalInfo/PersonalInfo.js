import React from "react";

const PersonalInfo = () => (
  <div className="form-group">
    <input
      type="textbox"
      name="name"
      placeholder="Name"
      className="form-control mt-2"
    />
    <input
      type="textbox"
      name="email"
      placeholder="Email"
      className="form-control mt-2"
    />
    <input
      type="textbox"
      name="dateOfBirth"
      placeholder="Date of Birth (DD/MM/YYYY)"
      className="form-control mt-2"
    />
    <input
      type="textbox"
      name="address"
      placeholder="Address"
      className="form-control mt-2"
    />
  </div>
);

export default PersonalInfo;
