import React, { useEffect } from "react";
import request from "../utils/request";
import axios from "axios";

const TestPage = () => {
  useEffect(() => {
      try {
        const response =  axios.get(
          `https://api-tani-direct.vercel.app/produk`
        ).then((response) => {
          console.log(response);
        });
        console.log(response);
      } catch (error) {
        console.error(error);
      };
  }, []);
  return (
    <div>
      <h1>Test Page</h1>
      <p>This is a test page for the React application.</p>
    </div>
  );
}

export default TestPage;