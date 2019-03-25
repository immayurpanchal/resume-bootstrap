import React from "react";


const PersonalInfo = () => {

  const infoChange = () => {
    console.log("info changed");
  };

  return (
    <div className="form-group">
      <input
        type="textbox"
        name="name"
        placeholder="Name"
        className="form-control mt-2"
        onChange={infoChange}
      />
      <input
        type="textbox"
        name="email"
        placeholder="Email"
        className="form-control mt-2"
        onChange={infoChange}
      />
      <input
        type="textbox"
        name="dateOfBirth"
        placeholder="Date of Birth (DD/MM/YYYY)"
        className="form-control mt-2"
        onChange={infoChange}
      />
      <input
        type="textbox"
        name="address"
        placeholder="Address"
        className="form-control mt-2"
        onChange={infoChange}
      />
    </div>
  );
};

export default PersonalInfo;
