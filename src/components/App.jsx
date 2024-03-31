import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import RegisterPage from "pages/RegisterPage";
import LoginPage from "pages/LoginPage";
import TrainingPage from "pages/TrainingPage";
import HomePage from "pages/HomePage";
import DictionaryPage from "pages/DictionaryPage";
import RecommendPage from "pages/RecommendPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { currentUserThunk } from "../redux/auth/operations";
import { selectIsRefresh } from "../redux/auth/selectors";
import PrivateRoute from "routes/PrivateRoute";
import NotFoundPage from "pages/NotFoundPage";

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
            <Route
              path="dictionary"
              element={
                <PrivateRoute>
                  <DictionaryPage />
                </PrivateRoute>
              }
            />
            <Route
              path="recommend"
              element={
                <PrivateRoute>
                  <RecommendPage />
                </PrivateRoute>
              }
            />
            <Route
              path="training"
              element={
                <PrivateRoute>
                  <TrainingPage />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}
    </>
  );
};
