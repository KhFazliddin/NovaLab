import React from "react";
import "../assets/style/Props.css";
import { loggedOutUser } from "../redux/feature/userSlice";
import { useDispatch } from "react-redux";
function Props(props) {
  const { first_name, email, avatar } = props;
  const dispatch = useDispatch();
  const logOutBtn = () => {
    dispatch(loggedOutUser());
  };
  return (
    <div className="container">
      <div className="user">
        <h1>{first_name}</h1>
        <p>{email}</p>
        <div className="image">
          <img src={avatar} alt="" />
        </div>
      </div>
      <button onClick={logOutBtn}>Log Out</button>
    </div>
  );
}

export default Props;
