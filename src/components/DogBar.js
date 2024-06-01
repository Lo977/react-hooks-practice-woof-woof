import React from "react";

function DogBar({ pups, onSetPupInfo }) {
  const dogBar = pups.map((pup) => {
    return <span onClick={() => onSetPupInfo(pup)}>{pup.name}</span>;
  });
  return <>{dogBar}</>;
}

export default DogBar;
