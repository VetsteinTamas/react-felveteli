import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({
  isLoggedIn,
  component: Component,
  questions,
  user,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn === "true")
          return <Component {...props} questions={questions} user={user} />;
        if (isLoggedIn !== "true")
          return (
            <Redirect to={{ path: "/", state: { from: props.location } }} />
          );
      }}
    />
  );
};

export default ProtectedRoute;
