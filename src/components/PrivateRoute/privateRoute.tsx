import React from "react";
import { Route, Redirect } from "react-router-dom";

import { PrivateRouteProps } from "../../types/types.6_35";

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  isAuthenticated,
  isLoading,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (isLoading) {
        return <p>Loading...</p>;
      } else if (isAuthenticated) {
        return <Component {...props} />;
      } else {
        return (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        );
      }
    }}
  />
);

export default PrivateRoute;
