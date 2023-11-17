import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/authSlice";
import { useEffect, useState } from "react";

import useHttp from "../hooks/use-http";
function HomePage() {
  const { error, sendRequest } = useHttp();
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const postStatus = useSelector((state) => state.posts.status);
  const { login } = authActions;

  useEffect(() => {
    const applyData = (data) => {
      setPosts(data);
    };
    sendRequest(
      { url: "https://jsonplaceholder.typicode.com/posts" },
      applyData
    );
  }, [sendRequest]);

  console.log(posts);

  function handleLogin() {
    dispatch(login());
  }

  return (
    <>
      <h1>My Home Page</h1>
      <button onClick={handleLogin}>Giriş Yap</button>
      {postStatus === "loading" && <div>Loading...</div>}
      {postStatus === "failed" && <div>Error: {error}</div>}
    </>
  );
}

export default HomePage;
