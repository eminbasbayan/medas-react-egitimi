import Counter from "../components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/authSlice";
import { useEffect, useState } from "react";
import { fetchPosts } from "../store/postSlice";
import ForwardCounter from "../components/ForwardCounter";
import BackwardCounter from "../components/BackwardCounter";
function HomePage() {
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();
  const postStatus = useSelector((state) => state.posts.status);
  const items = useSelector((state) => state.posts.items);
  const error = useSelector((state) => state.posts.error);
  const { login } = authActions;

  function handleLogin() {
    dispatch(login());
  }

  useEffect(() => {
    if (postStatus === "start") {
      dispatch(fetchPosts());
    }
  }, [dispatch, postStatus]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);
  }, []);

  return (
    <>
      <h1>My Home Page</h1>
      <button onClick={handleLogin}>Giriş Yap</button>
      {postStatus === "loading" && <div>Loading...</div>}
      {postStatus === "failed" && <div>Error: {error}</div>}
      <ForwardCounter />
      <BackwardCounter />
    </>
  );
}

export default HomePage;
