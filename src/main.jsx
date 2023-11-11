import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CartProvider from "./context/CartContext.jsx";
import ThemeProvider from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </CartProvider>
);
