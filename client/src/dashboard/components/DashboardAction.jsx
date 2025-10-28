import React from "react";
import { Link } from "react-router-dom";

const DashboardAction = () => {
  return (
    <>
      <div class="dash-buttons">
        <Link to="/profile/edit-profile" class="btn btn-light">
          <i class="fas fa-user-circle text-primary"></i> Edit Profile
        </Link>
        <a href="add-experience.html" class="btn btn-light">
          <i class="fab fa-black-tie text-primary"></i> Add Experience
        </a>
        <a href="add-education.html" class="btn btn-light">
          <i class="fas fa-graduation-cap text-primary"></i> Add Education
        </a>
      </div>
    </>
  );
};

export default DashboardAction;
