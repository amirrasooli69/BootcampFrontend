import { getSession } from "next-auth/react";
import AddTodoPage from "../components/templates/AddTodoPage";
import { useRouter } from "next/router";
import Auth from "../components/module/auth";

function AddTodo() {
  // const { status } = getSession();
  // const router = useRouter();
  // if (status != "authenticated") {
  //   router.replace("/");
  //   return;
  // }
  Auth()
  return <AddTodoPage />;
}

export default AddTodo;
