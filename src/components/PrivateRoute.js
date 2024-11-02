import React from "react";

import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...restProps }) {
  const isAtuhtenticated = true;

  return (
    <Route
      {...restProps}
      render={(props) => {
        return isAtuhtenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        );
      }}
    />
  );
}
