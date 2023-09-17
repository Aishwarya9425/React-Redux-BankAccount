import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [aadharNo, setAadharNo] = useState("");

  const dispatch = useDispatch();

  function handleClick() {
    if (!fullName || !aadharNo) return;
    dispatch(createCustomer(fullName, aadharNo));
  }

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Enter full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>Enter Aadhar No</label>
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
