import React from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import CreateProfile from "../components/forms/CreateProfile";

const ProfileRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/create-profile"
          element={<CreateProfile></CreateProfile>}
        ></Route>
        <Route
          path="/edit-profile"
          element={<CreateProfile></CreateProfile>}
        ></Route>
      </Routes>
    </>
  );
};

export default ProfileRouter;
