import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchAsyncUser, FetchAsyncUserId } from "../redux/feature/userSlice";
import "../assets/style/Profile.css";
import Props from "./Props";

function Profile() {
  const [user, setUser] = useState([]);
  const state = useSelector((state) => state.auth.users);
  const state2 = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchAsyncUser());
  }, [dispatch]);

const chosenUser=state.find(item=>item.email===state2.user.email)
  return (
    <div>
      <h1>Profile</h1>
      <div>
            <div className="container">
              {chosenUser && 
              <Props
                first_name={chosenUser.first_name}
                email={chosenUser.email}
                avatar={chosenUser.avatar}
              />
}
            </div>
      
      </div>
    </div>
  );
}

export default Profile;
