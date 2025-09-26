import Link from "next/link";
import {signOut, useSession} from "next-auth/react";
import { VscListSelection } from "react-icons/vsc";
import { FaMedal } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import {FiLogOut} from "react-icons/fi"

function Layout({ children }) {
  const {status} = useSession();
  const logOutHandler = ()=> {
    signOut();
  }
  return (
    <div className="container">
      <header>
        <p>Diamond Tennis</p>
        {status === "authenticated" ? <button onClick={logOutHandler}>LogOut<FiLogOut /></button> : null}
      </header>
      <div className="container--main">
        <aside>
          <p>welcome 👋</p>
          <ul>
            <li>
              <Link href="/">
                <VscListSelection /> Todos
              </Link>
            </li>
            <li>
              <Link href="/add-todo">
                <FaMedal /> Add To Do
              </Link>
            </li>
            <li>
              <Link href="/profile">
                <RxDashboard /> Profile
              </Link>
            </li>
          </ul>
        </aside>
        <section>{children}</section>
      </div>
    </div>
  );
}
export default Layout;
