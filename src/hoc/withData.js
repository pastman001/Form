import React from "react";

//fetch("https://dog.ceo/api/breeds/list/all");

const arr = { name: "Steven", email: "star123@gmail.com", password: "12345" };

export const withData = (MyComp) => {
  return (props) => {
    return <MyComp {...arr} {...props} />;
  };
};
