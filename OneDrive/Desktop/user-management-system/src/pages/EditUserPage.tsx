import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { updateUser } from "../store/userSlice";
import type { RootState } from "../store/store";

function EditUserPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((state: RootState) =>
    state.users.users.find(
      (user) => user.id === Number(id)
    )
  );

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [city, setCity] = useState(
    user?.address.city || ""
  );

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    dispatch(
      updateUser({
        id: Number(id),
        name,
        email,
        address: {
          city,
        },
      })
    );

    navigate("/users");
  };

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit User</h1>

      <input
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <br /><br />

      <input
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br /><br />

      <input
        value={city}
        onChange={(e) =>
          setCity(e.target.value)
        }
      />

      <br /><br />

      <button type="submit">
        Save Changes
      </button>
    </form>
  );
}

export default EditUserPage;