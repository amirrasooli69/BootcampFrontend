import { Link, Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function AboutUsPage() {
  return (
    <div>
      <NavBar />
      <h1>About Us Page</h1>
      <ul>
        <li><Link to="programmer">Programmer</Link></li>
        <li><Link to="user">User</Link></li>
      </ul>
      <Outlet />
    </div>
  );
}

export default AboutUsPage;
