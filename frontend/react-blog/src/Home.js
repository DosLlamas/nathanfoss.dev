import React, { useState, useEffect } from "react";

export default function Home() {

  const [djangoResp, setDjangoResp] = useState("")

  useEffect(()=> {
    fetch("http://127.0.0.1:8000/blogs/")
    .then(r => r.json())
    .then(data => setDjangoResp(data))// setDjangoResp(data)
  }, [])

  return (
    <div>
      <h1>Home</h1>
      <p>Response from django API: {djangoResp? djangoResp : "No response"}</p>
    </div>
  );
}
