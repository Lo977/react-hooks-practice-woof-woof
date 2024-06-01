import React from "react";

function PupInfo({ pupsInfo, onHandleUpdate }) {
  function handleUpdate(e) {
    fetch(`http://localhost:3001/pups/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isGoodDog: !isGoodDog }),
    })
      .then((r) => r.json())
      .then((pupData) => onHandleUpdate(pupData));
  }
  const { id, image, name, isGoodDog } = pupsInfo;
  return (
    <div>
      {!id ? null : (
        <>
          <img src={image} alt={name} />
          <h2>{name}</h2>
          <button onClick={handleUpdate}>
            {isGoodDog ? "Good Dog!" : "Bad Dog!"}
          </button>
        </>
      )}
    </div>
  );
}

export default PupInfo;
