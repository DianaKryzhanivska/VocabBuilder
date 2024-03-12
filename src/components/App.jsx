import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import RegisterPage from "pages/RegisterPage";
import Login from "pages/Login";
import Dictionary from "pages/Dictionary";
import Recommend from "pages/Recommend";
import Training from "pages/Training";
import HomePage from "pages/HomePage";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="dictionary" element={<Dictionary />} />
          <Route path="recommend" element={<Recommend />} />
          <Route path="training" element={<Training />} />
        </Route>
      </Routes>
    </>
  );
};
