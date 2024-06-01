import React, { useEffect, useState } from "react";
import PupInfo from "./PupInfo";
import DogBar from "./DogBar";
function App() {
  const [pups, setPups] = useState([]);
  const [pupInfo, setPupInfo] = useState({});
  const [isFilter, setIsFilter] = useState(false);
  // console.log(pupInfo);
  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then((r) => r.json())
      .then((data) => setPups(data));
  }, []);

  let filteredPups = pups.filter((pup) => (isFilter ? pup.isGoodDog : pup));

  function handleUpdate(pupData) {
    const updatedPup = pups.map((pup) =>
      pup.id === pupData.id ? pupData : pup
    );
    setPups(updatedPup);
    setPupInfo(pupData);
  }
  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter" onClick={() => setIsFilter(!isFilter)}>
          Filter good dogs: {isFilter ? "ON" : "OFF"}
        </button>
      </div>
      <div id="dog-bar">
        <DogBar pups={filteredPups} onSetPupInfo={setPupInfo} />
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <PupInfo pupsInfo={pupInfo} onHandleUpdate={handleUpdate} />
        </div>
      </div>
    </div>
  );
}

export default App;
