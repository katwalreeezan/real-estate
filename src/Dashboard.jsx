import React, { useState, useContext, useEffect } from "react";
import axios from "./API/axios";
import AuthContext from "./Context/AuthProvider";

const Dashboard = () => {
  const { auth } = useContext(AuthContext);
  console.log(auth);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/tasks", {
          headers: {
            Authorization: `Bearer ${auth}`,
          },
        });
        // Process the response data as needed
        console.log(response.data);
        setTasks(response.data.data);
      } catch (error) {
        // Handle errors
        console.error(error);
      }
    };

    if (auth) {
      fetchData();
    }
  }, [auth]);

  return (
    <div>
      <h2>Task List</h2>
      {/* Render your tasks here */}
      {tasks.map((task) => (
        <div key={task.id}>{task.attributes.name}</div>
      ))}
    </div>
  );
};

export default Dashboard;
