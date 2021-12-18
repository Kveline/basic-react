import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import "./index.css";

function App() {
  const [userList, setUserList] = useState([]);

  const userListHandler = (enteredUser) => {
    console.log(enteredUser);
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        {
          name: enteredUser.name,
          age: enteredUser.age,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={userListHandler}></AddUser>
      <UserList users={userList}></UserList>
    </div>
  );
}

export default App;
