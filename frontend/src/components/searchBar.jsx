import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { showAnimeList } from "../api";
import RenderImages from "./RenderImages";
const SearchBar = (props) => {
  const [search, setSearch] = useState("");
  const [listAnime, setList] = useState({});
  const history = useHistory();

  const BarStyling = {
    width: "20rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
  };

  function onSubmit(event) {
    event.preventDefault();
    showAnimeList(search).then((results) => {
      setList(results);
    });
    setSearch("");
  }
  return (
    <>
      <h1> Search for your favourite Anime!</h1>
      <form onSubmit={onSubmit}>
        <input
          style={BarStyling}
          type="search"
          placeholder="Enter an Anime... e.g One Piece"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button onClick={onSubmit}>search</button>
      </form>
      <RenderImages listOfAnime={listAnime} />
    </>
  );
};
export default SearchBar;
