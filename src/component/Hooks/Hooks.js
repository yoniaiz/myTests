import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";
const Hooks = () => {
  // state de-stracture  to function based component
  const [resource, setResource] = useState("posts");
  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("Todos")}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};
export default Hooks;
