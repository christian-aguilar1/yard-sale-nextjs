import React, { useState, useEffect } from "react";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);
  const [dataStatus, setDataStatus] = React.useState({
    loading: true,
    error: false,
  });

  const fetchAPI = async () => {
    await fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setDataStatus((prevDataStatus) => ({
          ...prevDataStatus,
          loading: false,
        }));
      })
      .catch((error) => {
        setDataStatus(() => ({
          loading: false,
          error: true,
        }));
      });
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return { products, dataStatus };
};

export { useGetProducts };
