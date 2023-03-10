import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
const SearchBox = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <div className="search">
        <AiOutlineSearch size={20} color={"blue"} />
        <input
          type="search"
          placeholder="Type to search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <p>{input}</p>
    </div>
  );
};

export default SearchBox;
