import Axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components"
import "./App.css";
import Character from "./Character";



const App = () => {
  const [charactersData, setCharacterData] = useState([]);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/character/1,3,142,117,183") //
      .then((res) => {
        setCharacterData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>

      {charactersData.map((characterIterationVar) => (
        <Character characterData={characterIterationVar} />
      ))}
    </div>
  );
};

export default App;
