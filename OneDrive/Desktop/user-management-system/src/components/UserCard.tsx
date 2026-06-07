import { useDispatch } from "react-redux";
import { deleteUser } from "../store/userSlice";
import type { User } from "../types/User";
import { Link } from "react-router-dom";

type UserCardProps = {
  user: User;
};

function UserCard({ user }: UserCardProps) {
  const dispatch = useDispatch();
  return (
    <div className="user-card">
    
      <h3>{user.name}</h3>

      <p>Email: {user.email}</p>

      <p>City: {user.address.city}</p>
    
<Link to={`/users/${user.id}`}>
  <button type="button">View Details</button>
</Link>

<Link to={`/edit-user/${user.id}`}>
  <button type="button">Edit</button>
</Link>

<button
  type="button"
  onClick={() => dispatch(deleteUser(user.id))}
>
  Delete
</button>
    </div>
  );
}

export default UserCard;