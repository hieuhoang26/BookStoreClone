import { commerce } from "./components/lib/Commerce.js";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import ErrorPage from './components/Error/ErrorPage'; // Correct import path
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar.jsx'
import Cart from './components/Cart/Cart.jsx';
import { useState, useEffect, } from 'react';
import FooterBook from "./components/Footer/FooterBook.jsx";
import ProductView from "./components/Products/ProductView/ProductView.jsx";
import Fiction from "./components/Categories/Fiction.jsx";
import Manga from "./components/Categories/Manga.jsx";
import Biography from "./components/Categories/Biography.jsx";
import Login from "./components/Auth/Login/Login.jsx";
import SignUp from "./components/Auth/SignUp/SignUp.jsx";
import Checkout from "./components/CheckoutForm/Checkout/Checkout.jsx";
import Shop from './components/Shop/Shop.jsx'
import './App.css'
import { ToastContainer } from 'react-toastify';
// import LoginView from "./components/Auth/Login/LoginTest.jsx";



const App = () => {
  const [products, setProducts] = useState([])
  const [featureProducts, setFeatureProducts] = useState([])
  const [fictionProducts, setFictionProducts] = useState([]);
  const [mangaProducts, setMangaProducts] = useState([]);
  const [bioProducts, setBioProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});

  const [errorMessage, setErrorMessage] = useState("");


  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
    console.log(data)
  };
  const fetchFeatureProducts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["featured"],
    });
    setFeatureProducts(data);
  };
  const fetchFictionProducts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["fiction"],
    });
    setFictionProducts(data);
  };
  const fetchMangaProducts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["manga"],
    });
    setMangaProducts(data);
  };
  const fetchBioProducts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["biography"],
    });
    setBioProducts(data);
  };
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };
  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });
    setCart(response.cart);
  };
  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);
    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response.cart);
  };
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchFeatureProducts();
    fetchCart();
    fetchMangaProducts();
    fetchFictionProducts();
    fetchBioProducts();
  }, []);
  // console.log(cart)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavbarWrapper cart={cart} />,
      children:
        [
          {
            path: "/",
            element:
              <Products
                products={products}
                featureProducts={featureProducts}
                onAddToCart={handleAddToCart}
                handleUpdateCartQty={handleUpdateCartQty}
              />,
            errorElement: <ErrorPage />
          },
          {
            path: "/product-view/:id",
            element: <ProductView />,
            errorElement: <ErrorPage />
          },
          {
            path: "/cart",
            element:
              <Cart
                cart={cart}
                onUpdateCartQty={handleUpdateCartQty}
                onRemoveFromCart={handleRemoveFromCart}
                onEmptyCart={handleEmptyCart}
              />,
            errorElement: <ErrorPage />
          },
          {
            path: "/checkout",
            element:
              <Checkout
                cart={cart}
                order={order}
                onCaptureCheckout={handleCaptureCheckout}
                error={errorMessage}
              />,
            errorElement: <ErrorPage />
          },
          {
            path: "/shop",
            element:
              <Shop />,
            errorElement: <ErrorPage />
          },
          {
            path: "/fiction",
            element:
              <Fiction
                fictionProducts={fictionProducts}
                onAddToCart={handleAddToCart}
              />,
            errorElement: <ErrorPage />
          },
          {
            path: "/manga",
            element:
              <Manga
                mangaProducts={mangaProducts}
                onAddToCart={handleAddToCart}
              />,
            errorElement: <ErrorPage />
          },
          {
            path: "/biography",
            element:
              <Biography
                bioProducts={bioProducts}
                onAddToCart={handleAddToCart}
              />,
            errorElement: <ErrorPage />
          },

        ],

    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorPage />
    },
    {
      path: "/signup",
      element: <SignUp />,
      errorElement: <ErrorPage />
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}


const NavbarWrapper = ({ cart }) => {
  return (
    <>
      <Navbar totalItems={cart?.total_items} />
      <div className="outlet">
        <Outlet />
      </div>
      <FooterBook />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
export default App;
