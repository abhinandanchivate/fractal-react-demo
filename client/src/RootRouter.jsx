import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./core/components/layout/Landing";
import AuthRouter from "./auth/router/AuthRouter";

const RootRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        {/** Rootrouter : its going to manage all ur module level routers ==> app==> rootrouter==> specific router.==> sp router==> will render the componnet. */}
        <Route path="/auth/*" element={<AuthRouter></AuthRouter>}></Route>
      </Routes>
    </>
  );
};

export default RootRouter;
// to work with routers : npm install react-router-dom lib.
// why RRD : it will help react to manipulate the vdom based on the url changes.
