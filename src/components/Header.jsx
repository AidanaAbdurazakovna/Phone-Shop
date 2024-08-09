import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <StyleHeader>
     
      <NavLink
          to="/"
          className={(isActive) =>
            "nav-link" + " " + (isActive ? "unselected" : "")
          }
        >
          {" "}
          <h1>Mobile</h1>
        </NavLink>

        
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              "nav-link" + " " + (isActive ? "unselected" : "")
            }
          >
            about
          </NavLink>
          <NavLink
            to={"/phones"}
            className={({ isActive }) =>
              "nav-link" + " " + (isActive ? "unselected" : "")
            }
          >
            phones
          </NavLink>
          <NavLink
            to={"/profile"}
            className={({ isActive }) =>
              "nav-link" + " " + (isActive ? "unselected" : "")
            }

          >
            profile
          </NavLink>
     
    </StyleHeader>
  );
};

const StyleHeader = styled.div`
  width: 95%;
  height: 50px;
  padding: 10px 40px;
  background-color: #6d727a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  & > Link {
    width: 250px;
    height: 45px;
    font-size: 18px;
    font-weight: 900;
    border-radius: 7px;
    border: 2px solid gray;
    justify-content: flex-end;

    cursor: pointer;
    background-color: #929297;
    color: #030110;
    &:hover {
      background-color: #cecad0;
      color: #a0a0a8;
    }
  }
`;
