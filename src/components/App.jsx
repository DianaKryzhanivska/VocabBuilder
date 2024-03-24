import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import RegisterPage from "pages/RegisterPage";
import LoginPage from "pages/LoginPage";
import Training from "pages/Training";
import HomePage from "pages/HomePage";
import DictionaryPage from "pages/DictionaryPage";
import RecommendPage from "pages/RecommendPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { currentUserThunk } from "../redux/auth/operations";
import { selectIsRefresh } from "../redux/auth/selectors";

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefresh);

  useEffect(() => {
    dispatch(currentUserThunk());
  }, [dispatch]);

  return (
    <>
      {isRefresh ? (
        <p>Loading...</p>
      ) : (
        <Routes>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="dictionary" element={<DictionaryPage />} />
            <Route path="recommend" element={<RecommendPage />} />
            <Route path="training" element={<Training />} />
          </Route>
        </Routes>
      )}
    </>
  );
};
