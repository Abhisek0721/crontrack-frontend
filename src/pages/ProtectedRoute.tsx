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

  const handleOutlet = () => {
    return <Outlet />;
  };

  useEffect(() => {
    if (isVerified) {
      if (token) {
        isWorkSpace ? handleOutlet() : navigate("/create-workspace-name");
        return;
      }
      return navigate("/login");
    }
    return navigate("/signup");
  }, []);

  return <></>;
};
