import UserCard from "./UserCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from "../store/userSlice";
import type { RootState, AppDispatch } from "../store/store";

function UserList() {
  const dispatch = useDispatch<AppDispatch>();

  const { users, loading } = useSelector(
    (state: RootState) => state.users
    
  );
  const [search, setSearch] = useState("");
  const filteredUsers = users.filter((user) =>
  user.name
    .toLowerCase()
    .includes(search.toLowerCase())
);
 useEffect(() => {
  if (users.length === 0) {
    dispatch(fetchUsers());
  }
}, [dispatch, users.length]);

  if (loading) {
    return <h2>Loading users...</h2>;
  }
<input
  type="text"
  placeholder="Search users..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
  return (
    <div>
      <h2>Users List</h2>
    
      <div className="user-grid">
  {filteredUsers.map((user) => (
    <UserCard
      key={user.id}
      user={user}
    />
  ))}
</div>
    </div>
  );
}

export default UserList;