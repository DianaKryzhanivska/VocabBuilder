import React from "react";
import sprite from "../../../images/sprite.svg";
import { LogOutBtn, UserIcon, UserName, Wrapper } from "./UserBar.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../../redux/auth/selectors";
import { signOutThunk } from "../../../redux/auth/operations";

const UserBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const handleLogout = () => {
    dispatch(signOutThunk());
  };
  return (
    <Wrapper>
      <UserName>{user?.name}</UserName>
      <UserIcon>
        <svg>
          <use href={`${sprite}#user`} />
        </svg>
      </UserIcon>
      {isLoggedIn && (
        <LogOutBtn onClick={handleLogout}>
          <svg>
            <use href={`${sprite}#log-out`} />
          </svg>
        </LogOutBtn>
      )}
    </Wrapper>
  );
};

export default UserBar;
