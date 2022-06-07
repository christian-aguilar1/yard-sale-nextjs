import React, { useState, useEffect } from "react";

import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);
  const [dataStatus, setDataStatus] = React.useState({
    loading: true,
    error: false,
  });

  // const fetchAPI = async () => {
  //   await fetch(API)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProducts(data);
  //       setDataStatus((prevDataStatus) => ({
  //         ...prevDataStatus,
  //         loading: false,
  //       }));
  //     })
  //     .catch(() => {
  //       setDataStatus(() => ({
  //         loading: false,
  //         error: true,
  //       }));
  //     });
  // };

  useEffect(() => {
    async function fetchData() {
      const response = await axios(API);
      setProducts(response.data);
      setDataStatus((prevDataStatus) => ({
        ...prevDataStatus,
        loading: false,
      }));
    }

    fetchData();
  }, [API]);

  return { products, dataStatus };
};

export { useGetProducts };
