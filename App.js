import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/users")
      .then(response => setItems(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {users.map(item => (
          <li key={item._id}>
            <h3>{item.sepal_length}</h3>
            <p>{item.sepal_width}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
