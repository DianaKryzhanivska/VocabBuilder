import React, { Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header/Header";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  if (!isLoggedIn) {
    navigate("/login");
  }
  return (
    <>
      <main>
        <Header />
        <Suspense fallback="Loading...">
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
