import React from "react";
import sprite from "../../../images/sprite.svg";
import { UserIcon, UserName, Wrapper } from "./UserBar.styled";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/auth/selectors";

const UserBar = () => {
  const user = useSelector(selectUser);
  return (
    <Wrapper>
      <UserName>{user?.name}</UserName>
      <UserIcon>
        <svg>
          <use href={`${sprite}#user`} />
        </svg>
      </UserIcon>
    </Wrapper>
  );
};

export default UserBar;
