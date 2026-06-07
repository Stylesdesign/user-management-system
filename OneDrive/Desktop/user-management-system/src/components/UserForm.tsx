import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";

function UserForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(
      addUser({
        id: Date.now(),
        name,
        email,
        address: {
          city,
        },
      })
    );

    setName("");
    setEmail("");
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add User</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <br /><br />

      <button type="submit">
        Add User
      </button>
    </form>
  );
}

export default UserForm;