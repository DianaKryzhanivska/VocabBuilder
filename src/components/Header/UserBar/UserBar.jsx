import React from "react";
import sprite from "../../../images/sprite.svg";
import { UserIcon, Wrapper } from "./UserBar.styled";

const UserBar = () => {
  return (
    <Wrapper>
      <p>Name</p>
      <UserIcon>
        <svg width={20} height={20}>
          <use href={`${sprite}#user`} />
        </svg>
      </UserIcon>
    </Wrapper>
  );
};

export default UserBar;
