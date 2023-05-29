import React, { useState, useEffect } from "react";

export default function Home() {
  const [djangoResp, setDjangoResp] = useState("");
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    fetch("/blogs").then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setDjangoResp(data[0]?.message);
        });
      } 
      else {
        res.json().then((errorData) => setErrors(errorData.errors));
      }
    })
    .catch((error) => {
      setErrors("An error occurred while fetching the data.");
      console.error(error);
    });
  }, [djangoResp]);

  return(
    <div>
      {errors ? (
        <div>
          <h1>Home</h1>
          <p>Errors{errors}</p>
        </div>
      ) : (
        <div>
          <h1>Home</h1>
          <p>
            Response from django API:<br/>
            {djangoResp ? djangoResp : "No response"}</p>
        </div>
      )}
    </div>
  )
}
