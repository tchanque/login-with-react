import Register from "./components/Register";
import Login from "./components/Login";
import Layout from "./components/Layout";
import Posts from "./components/Posts";
import Home from "./components/Home";
import LinkPage from "./components/LinkPage";
import RequireAuth from "./components/RequireAuth";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />

        {/* private pages */}
        <Route element={<RequireAuth />}>
          <Route path="" element={<Home />} />
          <Route path="posts" element={<Posts />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
