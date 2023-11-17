import { Link } from "react-router-dom";
import Counter from "../components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/authSlice";
import { useEffect } from "react";
import { fetchPosts } from "../store/postSlice";
function HomePage() {
  const dispatch = useDispatch();
  const postStatus = useSelector((state) => state.posts.status);
  const items = useSelector((state) => state.posts.items);
  const error = useSelector((state) => state.posts.error);
  const { login, logout } = authActions;

  function handleLogin() {
    dispatch(login());
  }
  console.log(postStatus);
  console.log(items);
  useEffect(() => {
    if (postStatus === "start") {
      dispatch(fetchPosts());
    }
  }, [dispatch, postStatus]);
  return (
    <>
      <h1>My Home Page</h1>
      <button onClick={handleLogin}>Giriş Yap</button>
      {postStatus === "loading" && <div>Loading...</div>}
      {postStatus === "failed" && <div>Error: {error}</div>}
      {items.map(({ title }) => (
        <h3>{title}</h3>
      ))}
      <Counter />
    </>
  );
}

export default HomePage;
