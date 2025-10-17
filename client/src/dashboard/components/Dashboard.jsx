import React, { useEffect } from "react";
import DashboardAction from "./DashboardAction";
import ExpDetails from "./ExpDetails";
import EduDetails from "./EduDetails";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentProfileAciton } from "../../profiles/redux/action/profile.action";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // useEffect
  // dispatch
  const dispatch = useDispatch();
  // selector ==> used to get the data from the store
  // we need the profile.
  // when u will register the user / 1st time login the user ==> do u have profile ? ==> /api/profile ==> it will throw the error .
  //==> fulfiled / rejected
  const { profile, error } = useSelector((state) => state.profile);

  useEffect(() => {
    // to call the action
    // then according to the response we will show the create profile or dashboard with details
    dispatch(getCurrentProfileAciton());
  }, []); // we want to execute it only once

  const renderDashboard = (
    <section class="container">
      <h1 class="large text-primary">Dashboard</h1>
      <p class="lead">
        <i class="fas fa-user"></i> Welcome John Doe
      </p>
      <DashboardAction></DashboardAction>

      <ExpDetails></ExpDetails>

      <h2 class="my-2">Education Credentials</h2>
      <EduDetails></EduDetails>

      <div class="my-2">
        <button class="btn btn-danger">
          <i class="fas fa-user-minus"></i>
          Delete My Account
        </button>
      </div>
    </section>
  );
  const createProfile = (
    <section className="container">
      <h2 className="my-2">Dashboard</h2>
      <p>You haven’t created a profile yet.</p>
      <Link to="/profile/create-profile" className="btn btn-primary">
        Create Profile
      </Link>
    </section>
  );
  return (
    <>
      {/**
    if i will write the conditions here , would be difficult to trace them */}{" "}
      {profile == null ? createProfile : renderDashboard}
    </>
  );
  // condition ? true : false is purely depending on the existance of profile.

  // how we should know if profile exists or not ?//
  // we need to perform the rest call or not.
};

export default Dashboard;
