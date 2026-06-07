import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

function UserDetailsPage() {
  const { id } = useParams();

  const user = useSelector((state: RootState) =>
    state.users.users.find(
      (user) => user.id === Number(id)
    )
  );

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <div>
      <h1>{user.name}</h1>

      <p>Email: {user.email}</p>

      <p>City: {user.address.city}</p>
    </div>
  );
}

export default UserDetailsPage;