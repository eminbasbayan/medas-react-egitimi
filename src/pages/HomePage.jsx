import { Link } from "react-router-dom";
function HomePage() {
  return (
    <>
      <h1>My Home Page</h1>
      <a href={"/products"}>Go to Products Page</a>
      <br />
      <Link to={"/products"}>Go to Products Page</Link>
    </>
  );
}

export default HomePage;
