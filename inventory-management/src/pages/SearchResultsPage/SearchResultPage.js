import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import SearchBar from "../../components/SearchBar/SearchBar";
import { API_KEY } from "../../API_KEYS/API_KEY1";
import "./SearchResultsPage.css";

const SearchResultsPage = () => {
  const [user, token] = useAuth();
  const [items, setItems] = useState([]);

  const getItems = async (search = "recess therapy") => {
    try {
      let response = await axios.get();
      setItems(response.data.items);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getItems();
  }, [token]);

  const getItem = (itemId) => {};

  return (
    <div>
      <SearchBar getItems={getItems} />
      <VideoMapper relatedItems={Items} />
    </div>
  );
};

export default SearchResultsPage;
