import axios from "axios";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
const SearchBox = () => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
     .then((response) => response.json())
     .then((json) => {
        const results = json.filter((user) => {
           return value && user && user.name && user.name.toLowerCase().includes(value)
        })
        console.log(results);
     })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (value) => {
    setInput(value);

    fetchData(value);
  };
  return (
    <div>
      <div className="search">
        <AiOutlineSearch size={20} color={"blue"} />
        <input
          type="search"
          placeholder="Type to search..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <p>{input}</p>
    </div>
  );
};

export default SearchBox;
