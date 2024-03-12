import React from "react";
import sprite from "../../../images/sprite.svg";
import { UserIcon, UserName, Wrapper } from "./UserBar.styled";

const UserBar = () => {
  return (
    <Wrapper>
      <UserName>Name</UserName>
      <UserIcon>
        <svg>
          <use href={`${sprite}#user`} />
        </svg>
      </UserIcon>
    </Wrapper>
  );
};

export default UserBar;
