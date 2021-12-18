import classes from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
  if (props.users.length < 1) {
    return (
      <Card className={classes.users}>
        <ul>No user!</ul>
      </Card>
    );
  }
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
