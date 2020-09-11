import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./Character.css";

const Char = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: black;
  font-size: 1.5rem;
  border-radius: 2rem;
  padding: 1rem;
  margin: 0.5rem;
  width: 50%;
  background-color: lightblue;

  img {
    width: 25%;
    height: auto;
  }
`;

const CharDetails = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;

  h2 {
      font-size: 2.5rem;
  }

  h3 {
      font-size: 2rem;
  }
`;

const Character = (props) => {
  const { characterData } = props;

  return (
    <Char>
      <img src={characterData.image} alt={`${characterData.name}`}></img>
      <CharDetails>
        <h2> Name: {characterData.name} </h2>
        <h3> Status: {characterData.status} </h3>
        <h3> Species: {characterData.species} </h3>
        <h3> Location: {characterData.location.name} </h3>
      </CharDetails>
      <div></div>
    </Char>
  );
};

export default Character;
