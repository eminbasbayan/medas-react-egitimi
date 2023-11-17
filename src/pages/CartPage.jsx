import { useSelector } from "react-redux";
import Products from "../components/Products/Products";

function CartPage() {
  const total = useSelector((state) => state.cart.total);
  return (
    <div>
      <h1 className="text-3xl font-bold">Sepet Sayfası</h1>
      <Products cart />
      Total: {total.toFixed(2)}
    </div>
  );
}

export default CartPage;
