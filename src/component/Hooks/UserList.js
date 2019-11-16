import React from "react";
import useResources from './userResources'



const UserList = ({ resource }) => {
  const resources = useResources('users');
  return (
    <ul>
      {resources.map(record => {
        return <li key={record.name}>{record.name}</li>;
      })}
    </ul>
  );
};

export default UserList;
