import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./component/ui/Header";
import axios from "axios";
import CharactorGrid from "./component/charactor/CharactorGrid";
import Search from "./component/ui/Search";

function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(result.data);
      setItems(result.data);
      setisLoading(false);
    };
    fetchItem();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharactorGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
