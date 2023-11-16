import { Link } from "react-router-dom";
import Counter from "../components/Counter";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
function HomePage() {
  const dispatch = useDispatch();
  const { login, logout } = authActions;

  function handleLogin() {
    dispatch(login());
  }
  return (
    <>
      <h1>My Home Page</h1>
      <button onClick={handleLogin}>Giriş Yap</button>
      <Counter />
    </>
  );
}

export default HomePage;
