import React, { useState, useEffect } from "react";

export default function Home() {
  const [djangoResp, setDjangoResp] = useState("");
  const [errors, setErrors] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/blogs/").then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setDjangoResp(data);
        });
      } else {
        res.json().then((errorData) => setErrors(errorData.errors));
      }
    });
  }, []);

  errors ? (
    <div>
      <p>{errors}</p>
    </div>
  ) : (
    <div>
      <h1>Home</h1>
      <p>Response from django API: {djangoResp ? djangoResp : "No response"}</p>
    </div>
  );
}
