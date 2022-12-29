import { useCallback, useEffect } from "react";

const Apitest = () => {
  //let token = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1OSwib3JpZ2luIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwLyIsImlwIjoiMTAzLjM5LjEyOC43MiIsImV4cGlyZSI6IjIwMjItMTItMjkgMTQ6NTg6NTIgKzAwMDAiLCJleHAiOjE2NzIzMjU5MzJ9._J5c5ofHOHoYNXXxP1mm8fh5a_HnY6r7dUmLUx1XVgM"
  const fetchCrop = useCallback(async () => {
    try {
      const response = await fetch("https://house-plants.p.rapidapi.com/all",
      {
          headers: {
            "X-RapidAPI-Key":'1bdf5e5f66msh2b5012dbf63f687p17a786jsn4dc018b4f162',
            'X-RapidAPI-Host': 'house-plants.p.rapidapi.com',
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      console.log(data)

    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    fetchCrop();
  }, [fetchCrop]);

  return <div></div>;
};

export default Apitest;
