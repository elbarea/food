import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchAPI = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          term: term,
          limit: 50,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchAPI} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have fount {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
