import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { loadingContext } from "./loadingContext";

const useFetch = (url) => {
  const [data, setData] = useState();
  const { setLoading } = useContext(loadingContext);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await axios.get(url);

      setTimeout(() => {
        setData(data.data);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  useEffect(() => {
    if (data) setLoading(false);
  }, [data]);

  return { data };
};

export default useFetch;
