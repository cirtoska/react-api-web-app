import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Home from "./Home";
import BrowseUsers from "./pages/BrowseUsers";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import User from "./pages/User";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import Carts from "./pages/Carts";
import Cart from "./pages/Cart";
import AddUser from "./components/AddUser";
import Login from "./pages/Login";
import PrivateRoutes from "./utility/PrivateRoutes";
import ToDoList from "./pages/ToDoList";
// import ToDoes from "./pages/ToDoes";
import PassingThoughts from "./pages/PassingThoughts";
import TestContextCopy from "./pages/TestContextCopy";
import TestContext from "./pages/TestContext";
import { ContextProvider } from "./utility/context";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/users" element={<BrowseUsers />} />
            <Route path="/users/:id" element={<User />} />
            <Route path="/posts" element={<Blog />} />
            <Route path="/posts/:id" element={<Post />} />
            <Route path="/cart" element={<Carts />} />
            <Route path="/cart/:id" element={<Cart />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/todolist" element={<ToDoList />} />
            {/* <Route path="/todolist" element={<ToDoes />} /> */}
            <Route path="/thoughts" element={<PassingThoughts />} />
            <Route path="/testcontext" element={<TestContext />} />
            <Route path="/testcontext1" element={<TestContextCopy />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
