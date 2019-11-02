import React from "react";
import { Route, Redirect } from "react-router-dom";

import { PrivateRouteProps } from "../../types/types.6_35";

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  isAuthenticated,
  isLoading,
  ...rest
}: PrivateRouteProps) => (
  <Route
    {...rest}
    render={(props): JSX.Element => {
      if (isLoading) {
        return <p>Loading...</p>;
      }
      if (isAuthenticated) {
        return <Component {...props} />;
      }
      return (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      );
    }}
  />
);

export default PrivateRoute;
