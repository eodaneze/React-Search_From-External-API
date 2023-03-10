import axios from "axios";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
const SearchBox = () => {
  const [input, setInput] = useState("");
  
  const fetchData = (value) => {
     axios.get("https://jsonplaceholder.typicode.com/users")
     .then((res) => {
        console.log(res.data);
     })
     .catch(err => {
       console.log(err);
     })
  }

 fetchData()
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
