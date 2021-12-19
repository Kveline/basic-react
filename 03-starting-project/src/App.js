import React, { useState, Fragment } from "react";
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
    // using react fragment as root element
    <Fragment>
      <AddUser onAddUser={userListHandler}></AddUser>
      <UserList users={userList}></UserList>
    </Fragment>
  );
}

export default App;
