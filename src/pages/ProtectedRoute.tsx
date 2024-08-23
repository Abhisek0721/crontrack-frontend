import { useAppSelecter } from "../Redux/Hooks/store";
import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { isUSerVerified } from "../Redux/util/getUserDetailFromBrowser";

export const ProtectedRoute = () => {
  const navigate = useNavigate();
  const userData = useAppSelecter((state) => state.auth.user);
  const token = userData?.access_token;
  const isVerified = isUSerVerified();
  const isWorkSpace = userData?.user_workspace;

  useEffect(() => {
    if (isVerified) {
      if (token) {
        if (!isWorkSpace) {
          navigate("/create-workspace-name");
        }
      } else {
        navigate("/login");
      }
    } else {
      navigate("/signup");
    }
  }, [isVerified, token, isWorkSpace, navigate]);

  // Return an Outlet for the nested routes if all checks pass
  if (isVerified && token && isWorkSpace) {
    return <Outlet />;
  }

  return null;
};
