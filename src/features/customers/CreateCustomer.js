import { useState } from "react";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [aadharNo, setAadharNo] = useState("");

  function handleClick() {}

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>Aadhar No</label>
          <input
            value={aadharNo}
            onChange={(e) => setAadharNo(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
}

export default Customer;
