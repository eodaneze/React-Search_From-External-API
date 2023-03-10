import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const SearchBox = () => {
  return (
    <div>
      <div className="search">
        <AiOutlineSearch size={20} color={"blue"}/>
        <input type="search" placeholder="Type to search..." />
      </div>
    </div>
  );
};

export default SearchBox;
