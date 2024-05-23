import React, { useState } from "react";

export default function Kamyab() {
  const [users, setUsers] = useState([]);
  const goForward = (index) => {
    const updatedData = [...users];
    if (updatedData[index].step < 3) {
      updatedData[index].step += 1;
    }
    setUsers(updatedData);
  };
  const enabledUser = () => {};
  return (
    <>
    <div className="container">
      <div>
        <button
          onClick={() => {
            setUsers((prev) => [
              ...prev,
              {
                userName: user-${prev.length + 1},
                step: 1,
              },
            ]);
          }}
        >
          Create User
        </button>
      </div>
      <div>
        {users.map((userItem, index) => (
          <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
            <div>{JSON.stringify(userItem)}</div>
            <div style={{ display: "flex", gap: "20px" }}>
              <button disabled>Step 1</button>
              <button disabled>Step 2</button>
              <button disabled>Step 3</button>
            </div>
            <div>
              <button
                className="forward"
                onClick={() => {
                  goForward(index);
                }}
              >
                Forward
              </button>
            </div>
          </div>
        ))}
      </div>
    

    </>
  );
}