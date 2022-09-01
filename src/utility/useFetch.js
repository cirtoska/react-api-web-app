import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

const useFetch = (url) => {
  const [toDoes, setToDoes] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const data = await axios.get(url);

    setTimeout(() => {
      setToDoes(data.data);
    }, 1000);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return { toDoes };
};

export default useFetch;
