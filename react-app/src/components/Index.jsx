import React from 'react';
import Nav from './Nav';
import { Redirect } from 'react-router-dom';
import { getUsers, isLoggedIn } from '../api';

export default () => {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    const fetchUsers = async () => {
      setUsers(await getUsers());
    }
    if (isLoggedIn()) fetchUsers();
  }, []);

  if (isLoggedIn()) {
    return (
      <>
      <Nav />
      <div>
        {users.map((user, index) => {
          return (
            <div key={index}>
              <p>Username: {user.username}</p>
              <p>Department: {user.department}</p>
              <hr />
            </div>
          );
        })}
      </div>
      </>
    );
  } else {
    return <Redirect to="/signin" />
  }
};
