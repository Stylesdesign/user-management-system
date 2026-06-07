import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import UsersPage from "./pages/UsersPage";
import AddUserPage from "./pages/AddUserPage";
import EditUserPage from "./pages/EditUserPage";
import UserDetailsPage from "./pages/UserDetailsPage";

function App() {
  return (
  <div className="app-container">
    <h1>User Management System</h1>
    <BrowserRouter>

      <nav>
        <Link to="/users">Users</Link>
        {" | "}
        <Link to="/add-user">Add User</Link>
      </nav>

      <Routes>
        <Route
          path="/users"
          element={<UsersPage />}
        />

        <Route
          path="/add-user"
          element={<AddUserPage />}
        />

        <Route
          path="/edit-user/:id"
          element={<EditUserPage />}
        />

        <Route
          path="/users/:id"
          element={<UserDetailsPage />}
        />
      </Routes>

    </BrowserRouter>
  </div>

  );
}

export default App;