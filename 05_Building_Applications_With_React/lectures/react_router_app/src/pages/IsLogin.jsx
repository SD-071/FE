import { Outlet, Navigate } from "react-router-dom";

function IsLogin({isLogin}) {
  return isLogin? <Outlet /> : <Navigate to="/login" />
}

export default IsLogin