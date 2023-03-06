import React from "react";

function Search({onSetSearchTerm}) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={onSetSearchTerm} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
