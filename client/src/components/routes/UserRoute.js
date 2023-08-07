// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
 
// const UserRoute = ({children}) => {
//     const { user } = useSelector((state) => ({...state}));
//     return user && user.token ? (
//         children
//     ) : (
//      <Navigate to="/" />
//     );
// };
 
// export default UserRoute;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";
import { currentUser } from "../../functions/auth";

const UserRoute = ({ children, ...rest }) => {
  const { user } = useSelector((state) => ({ ...state }));
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (user && user.token) {
      currentUser(user.token)
        .then((res) => {
          console.log("CURRENT User RES", res);
          setOk(true);
        })
        .catch((err) => {
          console.log("ADMIN ROUTE ERR", err);
          setOk(false);
        });
    }
  }, [user]);

  return ok ? (children) : <LoadingToRedirect />;
};

export default UserRoute;
