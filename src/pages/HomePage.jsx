import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <h1>My Home Page</h1>
        <a href={"/products"}>Go to Products Page</a>
        <br />
        <Link to={"/products"}>Go to Products Page</Link>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
