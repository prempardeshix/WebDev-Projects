import React, { useEffect, useState } from "react";
import axios from "axios";
const useGif = (tag) => {
  const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=NbR2mUG5cB1j61y2gIfO1UPAsThsQK1s&tag=${tag}`;
  const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=NbR2mUG5cB1j61y2gIfO1UPAsThsQK1s`;

  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState("false");

  async function fetchData(tag) {
    setLoading(true);
    const { data } = await axios.get(tag ? tagMemeUrl : randomMemeUrl);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return { gif, loading, fetchData };
};

export default useGif;
